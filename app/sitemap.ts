import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://axisstrategiesgroup.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/340b-consulting`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pharmacy-revenue-optimization`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/infusion-program-development`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pharmacy-leadership-and-operations`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/executive-advisory-support`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/compliance-and-audit-readiness`,
      lastModified: new Date(),
    },
  ];
}