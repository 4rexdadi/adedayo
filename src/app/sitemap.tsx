import { MetadataRoute } from "next";
import siteMetadata from "../data/siteMetaData";

const sitemap = (): MetadataRoute.Sitemap => {
  const routes: MetadataRoute.Sitemap = [
    {
      url: `${siteMetadata.siteUrl}`,
      changeFrequency: "weekly",
      priority: 1,
    },
    // {
    //   url: `${siteMetadata.siteUrl}/project`,
    //   changeFrequency: "weekly",
    //   priority: 0.5,
    // },
  ];

  const pageRoutes = routes.map(({ changeFrequency, priority, url }) => ({
    url,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  return [...pageRoutes];
};

export default sitemap;
