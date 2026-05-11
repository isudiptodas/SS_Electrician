import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sselectrician.online",
      lastModified: new Date(),
    },
    {
      url: "https://www.sselectrician.online/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.sselectrician.online/contact",
      lastModified: new Date(),
    },
    {
      url: "https://www.sselectrician.online/privacy",
      lastModified: new Date(),
    },
    {
      url: "https://www.sselectrician.online/data-usage",
      lastModified: new Date(),
    },
  ];
}
