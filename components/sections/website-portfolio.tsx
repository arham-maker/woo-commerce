"use client";

import { ASSETS } from "@/lib/constants";
import { ImageGallery } from "@/components/sections/image-gallery";

export function WebsitePortfolio() {
  return (
    <ImageGallery
      title={
        <>
          Have a look at some of our{" "}
          <br className="hidden sm:block" />
          Website Portfolio
        </>
      }
      lead="We have won many awards for our impressive logos, here is why:"
      images={ASSETS.websiteDesign}
      columns={3}
      rounded={false}
    />
  );
}
