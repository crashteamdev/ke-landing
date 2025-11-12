import { MetadataRoute } from 'next';
import { axiosApi } from '@/shared/api/axios';
import { SITE_SLUG } from '@/shared/config';
import { getSiteDocumentId } from '@/shared/api/site';

interface Article {
  slug: string;
  updatedAt: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    const siteDocId = await getSiteDocumentId();
    const url = siteDocId
      ? `/articles?filters[site][documentId][$eq]=${siteDocId}&fields[0]=slug&fields[1]=updatedAt&publicationState=live`
      : `/articles?fields[0]=slug&fields[1]=updatedAt&publicationState=live`;
    const response = await axiosApi.get<{ data: any[] }>(url);
    const list = Array.isArray(response.data?.data) ? response.data.data : [];
    // Normalize Strapi v5/v4 item shape (attributes or flat)
    return list
      .map((item: any) => {
        const attrs = item?.attributes ?? item ?? {};
        return {
          slug: attrs.slug,
          updatedAt: attrs.updatedAt ?? new Date().toISOString(),
        } as Article;
      })
      .filter((a: Article) => Boolean(a.slug));
  } catch (error) {
    console.error('Failed to fetch articles for sitemap:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticles();

  const articleUrls = articles.map((article) => ({
    url: `https://marketdb.pro/blog/${article.slug}`,
    lastModified: new Date(article.updatedAt),
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

