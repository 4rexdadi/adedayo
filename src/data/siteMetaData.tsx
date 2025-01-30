// https://www.favicon-generator.org/

import {
  Icon,
  Icons,
  IconURL,
} from "next/dist/lib/metadata/types/metadata-types";

const icons: IconURL | Icon[] | Icons | null | undefined = [
  {
    url: "/icons/apple-touch-icon.png",
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-touch-icon.png",
  },
  {
    url: "/icons/favicon-16x16.png",
    href: "/icons/favicon-16x16.png",
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
  },
  {
    url: "/icons/favicon-32x32.png",
    href: "/icons/favicon-32x32.png",
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
  },
  {
    rel: "mask-icon",
    url: "/icons/safari-pinned-tab.svg",
    href: "/icons/safari-pinned-tab.svg",
    color: "#5bbad5",
  },
  {
    rel: "apple-touch-icon",
    sizes: "57x57",
    url: "/icons/apple-icon-57x57.png",
    href: "/icons/apple-icon-57x57.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "60x60",
    href: "/icons/apple-icon-60x60.png",
    url: "/icons/apple-icon-60x60.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "72x72",
    href: "/icons/apple-icon-72x72.png",
    url: "/icons/apple-icon-72x72.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/icons/apple-icon-76x76.png",
    url: "/icons/apple-icon-76x76.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "114x114",
    href: "/icons/apple-icon-114x114.png",
    url: "/icons/apple-icon-114x114.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "120x120",
    href: "/icons/apple-icon-120x120.png",
    url: "/icons/apple-icon-120x120.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "144x144",
    href: "/icons/apple-icon-144x144.png",
    url: "/icons/apple-icon-144x144.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "152x152",
    href: "/icons/apple-icon-152x152.png",
    url: "/icons/apple-icon-152x152.png",
  },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/icons/apple-icon-180x180.png",
    url: "/icons/apple-icon-180x180.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "192x192",
    href: "/icons/android-icon-192x192.png",
    url: "/icons/android-icon-192x192.png",
  },
  {
    rel: "icon",
    type: "image/png",
    sizes: "96x96",
    href: "/icons/favicon-96x96.png",
    url: "/icons/favicon-96x96.png",
  },
  {
    rel: "msapplication-TileColor",
    url: "/icons/ms-icon-144x144.png",
    color: "#ffffff",
  },
  {
    rel: "msapplication-TileImage",
    href: "/icons/ms-icon-144x144.png",
    url: "/icons/ms-icon-144x144.png",
  },
];

const siteMetadata = {
  title: "Adedayo Aturu: Software Developer Portfolio",
  description:
    "Adedayo is a Software Developer from Lagos, Nigeria. Focused on building software solutions for entrepreneurs and business owners.",
  headerTitle: "Adedayo Aturu: Software Developer Portfolio",
  author: "Adedayo Aturu",
  theme: "#000000",
  siteUrl: "https://www.daat.dev/",
  siteLogo: "/assets/images/adedayo2.jpg",
  socialBanner: "/assets/images/adedayo2.jpg",
  email: "adedayoaturu@gmail.com",
  github: "https://github.com/4rexdadi",
  twitter: "https://www.twitter.com/forexdadi",
  facebook: "https://m.facebook.com/dayo2sexy",
  instagram: "https://instagram.com/4rexdadi",
  youtube: "https://youtube.com/@4rexdadi195?si=5DbLvV84K6rHG8jC",
  linkedin: "https://www.linkedin.com/in/adedayoaturu/",
  language: "en-us",
  locale: "en-US",
  icons,
  keywords: [
    // Location and Role-specific
    "Lagos software developer",
    "Nigeria technical lead",
    "African software engineer",
    "Lagos full stack developer",

    // Technical Skills - Primary
    "React TypeScript developer",
    "Next.js expert Nigeria",
    "Node.js backend developer",
    "Python FastAPI developer",

    // Technical Skills - Secondary
    "Google Maps API integration",
    "logistics software developer",
    "real-time tracking systems",
    "TypeScript migration specialist",

    // Domain Expertise
    "logistics application developer",
    "financial dashboard developer",
    "enterprise software architect",
    "performance optimization expert",

    // Technologies - Detailed
    "React Three.js developer",
    "MongoDB database expert",
    "Docker Kubernetes devops",
    "Express.js API developer",

    // Project Types
    "large scale web applications",
    "mobile app development",
    "enterprise software solutions",
    "system architecture design",
  ],
};

export default siteMetadata;
