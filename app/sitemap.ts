import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.davisrealtyteam.com";

  const urls = [
    "/",
    "/realtors-in-phoenix-az",
    "/homes-for-sale-phoenix-az",
    "/first-time-homebuyer-phoenix-az",
    "/realtors-in-peoria-az",
    "/homes-for-sale-peoria-az",
    "/homes-for-sale-anthem-az",
    "/realtors-in-surprise-az",
    "/homes-for-sale-surprise-az",
    "/realtors-in-scottsdale-az",
    "/homes-for-sale-scottsdale-az",
    "/homes-for-sale-gilbert-az",
    "/realtors-in-gilbert-az",
    "/areas-we-serve",
  ];

  return urls.map((url) => ({
    url: `${baseUrl}${url}`,
    lastModified: new Date("2025-12-16T08:02:41+00:00"),
    priority: url === "/" ? 1.0 : 0.8,
  }));
}
