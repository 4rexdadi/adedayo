import { MetadataRoute } from "next";
import siteMetadata from "../data/siteMetaData";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", // Block API routes from indexing
          "/admin/", // Block admin areas if any
          "/_next/", // Block Next.js internal files
          "/private/", // Block private routes if any
        ],
      },
      {
        userAgent: "GPTBot", // OpenAI's web crawler
        allow: "/",
      },
      {
        userAgent: "Google-Extended", // Google's AI training crawler
        allow: "/",
      },
    ],
    sitemap: `${siteMetadata.siteUrl}/sitemap.xml`,
    host: siteMetadata.siteUrl,
  };
};

export default robots;
