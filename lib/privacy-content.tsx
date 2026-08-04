import type { LegalSection } from "@/lib/legal-types";

export type { LegalBlock, LegalSection } from "@/lib/legal-types";

export const PRIVACY_INTRO =
  "At WooCommerce Web, we prioritize the respect and transparency of user data. Our Privacy Policy is built upon these principles and includes measures to ensure compliance with the requirements outlined by the General Data Protection Regulation (GDPR).";

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    title: "Privacy Policy Statement",
    blocks: [
      {
        type: "p",
        content:
          "We highly value your personal data at WooCommerce Web. Our Privacy Policy is designed to provide clear and transparent information about the data we collect when you visit woocommerceweb.com or communicate with us through various channels such as email, phone, or messengers. Our Privacy Policy outlines how you can control the information we collect, how we use this data, and how to contact us regarding your privacy concerns. Furthermore, it details the measures we implement to safeguard your data in compliance with the regulations stipulated by the General Data Protection Regulation (GDPR).",
      },
    ],
  },
  {
    title: "What Information Do We Collect?",
    blocks: [
      {
        type: "p",
        content:
          "At WooCommerce Web, we collect the information you explicitly and voluntarily provide through our contact forms and pages. We do not gather information without your conscious decision to provide it.",
      },
      {
        type: "p",
        content:
          "The information you may provide includes your name, email address, and phone number, primarily about projects, services, and billing. Additionally, information may be collected during phone or email conversations with our official representatives at WooCommerce Web.",
      },
      {
        type: "p",
        content:
          "Furthermore, WooCommerce Web may gather information concerning third parties directly relevant to you, your project, or your requested services.",
      },
    ],
  },
  {
    title: "How Do We Use The Information We Collect?",
    blocks: [
      {
        type: "p",
        content:
          "At WooCommerce Web, the information we collect is utilized to deliver digital services tailored to your needs. Some ways we may use your information include:",
      },
      {
        type: "p",
        content:
          "1. Web Support: Assisting you with technical support and troubleshooting on our website.",
      },
      {
        type: "p",
        content:
          "2. Customer Service: Providing responsive and helpful customer service related to your inquiries and requests.",
      },
      {
        type: "p",
        content:
          "3. Project Email Updates: Sending you updates and notifications regarding the progress of your project.",
      },
      {
        type: "p",
        content:
          "4. Newsletters: Distributing newsletters containing relevant updates, insights, and offers.",
      },
      {
        type: "p",
        content:
          "5. Direct Contact: Reaching out to you directly concerning your project and services.",
      },
      {
        type: "p",
        content:
          "It's important to note that WooCommerce Web does not share information with external parties unless it is essential to fulfill the services you have requested. However, WooCommerce Web reserves the right to disclose relevant information following official judicial practices, such as complying with a valid subpoena or court order.",
      },
    ],
  },
  {
    title: "Third-Party Websites",
    blocks: [
      {
        type: "p",
        content:
          "WooCommerce Web's website may contain links to third-party websites. Please be aware that WooCommerce Web has no control over these websites' content or privacy practices, as they operate independently with their own distinct privacy policies.",
      },
      {
        type: "p",
        content:
          "As a result, WooCommerce Web cannot assume any responsibility or liability for these third-party websites' activities, content, or policies. Additionally, including these links on WooCommerce Web's website does not imply endorsement of the information or products on these external sites.",
      },
      {
        type: "p",
        content:
          "Should you choose to access any third-party websites linked to WooCommerce Web's website, please note that you do so at your own discretion and risk. We encourage you to review the privacy policies of these websites before providing any personal information or engaging with their content.",
      },
    ],
  },
  {
    title: "WooCommerce Web Is Committed to Data Security",
    blocks: [
      {
        type: "p",
        content:
          "At WooCommerce Web, we prioritize the security of your data. We have implemented comprehensive practices to ensure the proper use, accuracy, and protection of the information we collect, both online and offline, encompassing electronic and managerial measures.",
      },
      {
        type: "p",
        content:
          "For online transactions involving credit cards, we employ secure servers and SSL connections to guarantee the safety of every transaction. Our systems adhere to the latest industry standards to provide a secure environment for financial transactions. Additionally, all billing details, including credit card information, are promptly deleted upon the termination or completion of a client project.",
      },
    ],
  },
  {
    title:
      "WooCommerce Web Is Committed to Protecting Children's Privacy Online",
    blocks: [
      {
        type: "p",
        content:
          "We take children's privacy seriously at WooCommerce Web. As such, we do not knowingly collect or maintain information on our website from individuals under 13. Our website is not designed to attract individuals under 13, and it is not intended for users under 18.",
      },
      {
        type: "p",
        content:
          "Suppose we become aware that an individual under 18 has provided personal information through our website. In that case, WooCommerce Web will promptly delete that information and refrain from using it for any purpose.",
      },
      {
        type: "p",
        content:
          "WooCommerce Web encourages parents and legal guardians to discuss openly with their children about the potential risks of sharing personal information online.",
      },
    ],
  },
  {
    title: "Our Privacy Policy and Your Consent",
    blocks: [
      {
        type: "p",
        content: "By using our website, you consent to WooCommerce Web's Privacy Policy.",
      },
      {
        type: "p",
        content:
          "Any updates or modifications to our Privacy Policy will be published on this webpage for your review.",
      },
    ],
  },
  {
    title: "Your Privacy Choices and Rights",
    blocks: [
      {
        type: "p",
        content:
          "At WooCommerce Web, you can navigate our website and access its features without needing personal information. Additionally, you can opt out of specific activities by sending us an email or utilizing the opt-out mechanisms provided within those activities.",
      },
    ],
  },
  {
    title: "Contact Details",
    blocks: [
      {
        type: "p",
        content:
          "If you have any questions regarding our Privacy Policy, please don't hesitate to contact us via live chat. We are committed to responding to your inquiries promptly, typically within 24 hours.",
      },
    ],
  },
];
