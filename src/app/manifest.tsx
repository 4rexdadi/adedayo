import { MetadataRoute } from "next";
import siteMetadata from "../data/siteMetaData";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: siteMetadata.title,
    short_name: "Adedayo Aturu",
    description: siteMetadata.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    theme_color: siteMetadata.theme,
    background_color: "#ffffff",
    lang: siteMetadata.language,
    categories: ["portfolio", "developer", "software", "technology"],

    icons: [
      {
        src: "/icons/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/android-icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],

    shortcuts: [
      {
        name: "About",
        short_name: "About",
        description: "Learn about Adedayo Aturu",
        url: "/about",
        icons: [{ src: "/icons/android-icon-96x96.png", sizes: "96x96" }],
      },
      {
        name: "Projects",
        short_name: "Projects",
        description: "View portfolio projects",
        url: "/projects",
        icons: [{ src: "/icons/android-icon-96x96.png", sizes: "96x96" }],
      },
      {
        name: "Contact",
        short_name: "Contact",
        description: "Get in touch",
        url: "/contact",
        icons: [{ src: "/icons/android-icon-96x96.png", sizes: "96x96" }],
      },
    ],
  };
};

export default manifest;
