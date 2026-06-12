import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://adhirajpratapsingh.in',
      lastModified: new Date(),
    },
    {
      url: 'https://adhirajpratapsingh.in/services',
      lastModified: new Date(),
    },
    {
      url: 'https://adhirajpratapsingh.in/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://adhirajpratapsingh.in/aboutus',
      lastModified: new Date(),
    },
  ];
}