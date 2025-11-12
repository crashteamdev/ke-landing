import { MetadataRoute } from 'next';
import { axiosApi } from '@/shared/api/axios';
import { SITE_SLUG } from '@/shared/config';

interface Article {
  id: string;
  attributes: {
    slug: string;
    updatedAt: string;
  };
}

async function getArticles(): Promise<Article[]> {
  try {
    const url = `/articles?filters[site][slug][$eq]=${SITE_SLUG}&fields[0]=slug&fields[1]=updatedAt&status=published`;
    const response = await axiosApi.get<{ data: any[] }>(url);
    return Array.isArray(response.data?.data) ? response.data.data : [];
  } catch (error) {
    console.error('Failed to fetch articles for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();

  const articleUrls = articles.map((article) => ({
    url: `https://marketdb.pro/blog/${article.attributes.slug}`,
    lastModified: new Date(article.attributes.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [
    {
      url: 'https://marketdb.pro',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://marketdb.pro/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://marketdb.pro/privacy',
      lastModified: new Date('2024-07-08'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://marketdb.pro/policy',
      lastModified: new Date('2024-07-08'),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    ...articleUrls,
  ];
}

