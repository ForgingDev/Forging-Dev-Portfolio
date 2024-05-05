import { URL } from "@/common/data/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: `${URL}/about`,
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: `${URL}/services`,
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: `${URL}/contact`,
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.5,
    },
    {
      url: `${URL}/`,
      lastModified: new Date().toISOString(),
      changeFrequency: "never",
      priority: 0.5,
    },
  ];
}
