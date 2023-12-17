import { MetadataRoute } from "next";
import siteMetadata from "../data/siteMetaData";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: "/private/",
    },
    host: `${siteMetadata.siteUrl}`,
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
  };
};

export default robots;
