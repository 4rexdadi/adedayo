import { MetadataRoute } from "next";
import siteMetadata from "../data/siteMetaData";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: siteMetadata.title,
    short_name: siteMetadata.author,
    description: siteMetadata.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#ffffff",
    icons: [
      {
        src: "/icons/favicon.ico",
        sizes: "64x64 32x32 24x24 16x16",
        type: "image/x-icon",
        purpose: "maskable",
      },
      {
        src: "/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
};

export default manifest;
