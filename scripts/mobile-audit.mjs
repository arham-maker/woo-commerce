import { mkdir, writeFile, readdir, readFile } from 'node:fs/promises';
// Run against a local preview and a Chromium browser launched with
// --remote-debugging-port=9223. AUDIT_URL, AUDIT_PATHS, and AUDIT_WIDTHS
// optionally select the server, comma-separated routes, and viewport widths.
const out = '.next/mobile-audit';
await mkdir(out, { recursive: true });
const target = await fetch('http://127.0.0.1:9223/json/new?about:blank', { method: 'PUT' }).then(r => r.json());
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise(r => ws.addEventListener('open', r, { once: true }));
let id = 0; const pending = new Map();
ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id) { const p = pending.get(m.id); pending.delete(m.id); if(m.error) p.reject(m.error); else p.resolve(m.result); } });
const send = (method, params = {}) => new Promise((resolve, reject) => { pending.set(++id, { resolve, reject }); ws.send(JSON.stringify({ id, method, params })); });
const evaluate = async expression => { const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true }); if(r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result.value; };
await send('Page.enable');
await send('Emulation.setFocusEmulationEnabled', { enabled: true });
const pause = ms => new Promise(r => setTimeout(r, ms));
async function navigate(path) {
  console.log(`Checking ${path}`);
  await send('Page.bringToFront');
  await send('Page.navigate', { url: `${process.env.AUDIT_URL || 'http://127.0.0.1:3101'}${path}` });
  for(let i=0;i<20;i++) { await pause(500); if(await evaluate(`document.readyState !== 'loading' && !!document.querySelector('main')`)) break; }
  await pause(900);
  for(let i=0;i<20;i++) {
    if(await evaluate(`!document.images[0] || document.images[0].complete`)) break;
    await pause(250);
  }
}
async function screenshot(name) { const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }); await writeFile(`${out}/${name}.png`, Buffer.from(r.data, 'base64')); }
if(process.argv.includes('--interactions')) {
  await send('Emulation.setDeviceMetricsOverride',{width:320,height:900,deviceScaleFactor:1,mobile:true});
  await navigate('/lp');
  await pause(3000);
  await evaluate(`document.documentElement.style.scrollBehavior='auto'`);
  await screenshot('verified-lp-320');
  await evaluate(`document.querySelector('#portfolio').scrollIntoView()`);
  await pause(1200);
  await screenshot('verified-portfolio-320');
  console.log('portfolio', await evaluate(`(()=>{const row=document.querySelector('#portfolio [role=region]');const before=row.scrollLeft;row.scrollLeft+=160;return {swipes:row.scrollLeft!==before,posters:[...document.querySelectorAll('#portfolio video')].every(v=>!!v.poster),controls:[...document.querySelectorAll('#portfolio video')].every(v=>v.controls)}})()`));
  await navigate('/');
  await pause(3000);
  console.log('menu trigger',await evaluate(`document.querySelector('[aria-label="Open menu"]')?.outerHTML`));
  await evaluate(`document.querySelector('[aria-label="Open menu"]').click()`);
  await pause(800);
  console.log('menu',await evaluate(`(()=>{const d=document.querySelector('[role=dialog]');return {opens:!!d,width:d?.getBoundingClientRect().width,viewport:innerWidth}})()`));
  await screenshot('verified-menu-320');
  await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
  await pause(400);
  console.log('inquiry trigger',await evaluate(`[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Get Started')&&b.getBoundingClientRect().width)?.outerHTML`));
  await evaluate(`[...document.querySelectorAll('button')].find(b=>b.textContent.includes('Get Started')&&b.getBoundingClientRect().width).click()`);
  await pause(800);
  console.log('inquiry',await evaluate(`(()=>{const d=document.querySelector('[role=dialog]');return {opens:!!d,width:d?.getBoundingClientRect().width,scroll:d?.scrollWidth,viewport:innerWidth}})()`));
  await screenshot('verified-inquiry-320');
  console.log('chat frames', await evaluate(`({mobile:matchMedia('(max-width: 767px)').matches,api:typeof window.zE,frames:[...document.querySelectorAll('iframe')].map(f=>({id:f.id,title:f.title,width:f.getBoundingClientRect().width,height:f.getBoundingClientRect().height}))})`));
} else if(process.argv.includes('--posters')) {
  const { default: sharp } = await import('sharp');
  await send('Page.navigate', { url: `${process.env.AUDIT_URL || 'http://127.0.0.1:3101'}/favicon.ico` });
  await pause(1500);
  for(let i=1;i<=7;i++) {
    const data = await evaluate(`(async()=>{const v=document.createElement('video');v.muted=true;v.src='/images/assets/images/gallery/${i}.webm';await new Promise((r,j)=>{v.onloadeddata=r;v.onerror=j});v.currentTime=.1;await new Promise(r=>v.onseeked=r);const c=document.createElement('canvas');c.width=v.videoWidth;c.height=v.videoHeight;c.getContext('2d').drawImage(v,0,0);return c.toDataURL('image/webp',.85).split(',')[1]})()`);
    const poster = await sharp(Buffer.from(data, 'base64')).resize({ width: 936, withoutEnlargement: true }).webp({ quality: 80 }).toBuffer();
    await writeFile(`public/images/assets/images/gallery/${i}.webp`, poster);
    console.log(`Saved poster ${i}`);
  }
} else {
  async function routes(dir='app') { let result=[]; for(const e of await readdir(dir,{withFileTypes:true})) {if(e.isDirectory()&&!e.name.startsWith('[')) result.push(...await routes(`${dir}/${e.name}`)); else if(e.name==='page.tsx') result.push(dir.slice(3)||'/');}return result; }
  const paths = process.env.AUDIT_PATHS?.split(',') || [...await routes(), ...[...(await readFile('lib/packages.ts','utf8')).matchAll(/slug: "([^"]+)"/g)].map(m=>`/package-details/${m[1]}`)];
  const results=[];
  for(const width of (process.env.AUDIT_WIDTHS?.split(',').map(Number) || [320,390,768,1440])) {
    await send('Emulation.setDeviceMetricsOverride',{width,height:900,deviceScaleFactor:1,mobile:width<768});
    for(const path of paths) {
      await navigate(path);
      await evaluate(`document.documentElement.style.scrollBehavior='auto'`);
      const height = await evaluate('document.body.scrollHeight');
      for(let y=0;y<height;y+=700) { await evaluate(`window.scrollTo({top:${y},behavior:'instant'})`); await pause(25); }
      await evaluate(`window.scrollTo({top:0,behavior:'instant'})`);
      await pause(800);
      const state=await evaluate(`({width:innerWidth,scroll:document.documentElement.scrollWidth,title:document.title,overflow:[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>innerWidth+1||r.left < -1)&&!e.closest('[class*=overflow-x-auto], [class*=overflow-hidden]')}).slice(0,12).map(e=>({tag:e.tagName,cls:e.className,text:e.textContent?.slice(0,65)})),broken:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.currentSrc)})`);
      const loaded=await evaluate(`!!document.querySelector('main')`);
      results.push({path,...state,width,loaded}); console.log(JSON.stringify(results.at(-1)));
      await writeFile(`${out}/progress-${process.env.AUDIT_PATHS ? 'selected' : 'all'}.json`,JSON.stringify(results,null,2));
      if(['/','/lp','/logo-design'].includes(path)&&[320,390,1440].includes(width)) await screenshot(`${process.argv.includes('--before')?'before':'after'}-${path.replaceAll('/','')||'home'}-${width}`);
    }
  }
  await writeFile(`${out}/after-${process.env.AUDIT_PATHS ? 'selected' : 'all'}.json`,JSON.stringify(results,null,2));
  if(results.some(r=>!r.loaded||r.scroll>r.width+1||r.broken.length)) process.exitCode=1;
}
ws.close();
await fetch(`http://127.0.0.1:9223/json/close/${target.id}`);
