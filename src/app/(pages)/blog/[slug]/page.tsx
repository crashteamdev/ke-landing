import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { axiosApi } from '@/shared/api/axios';
import { SITE_SLUG } from '@/shared/config';
import { getSiteDocumentId } from '@/shared/api/site';
import { Metadata } from 'next';

interface ArticleAttributes {
  Title: string;
  Content: BlocksContent;
  Description: string;
  Keywords: string;
  OgImage: string;
}

interface Article {
  id: string;
  attributes: ArticleAttributes;
}

// Enable ISR with 60 second revalidation
export const revalidate = 60;

interface BlogArticleProps {
  params: {
    slug: string;
  };
}

const normalize = (item: any): Article => {
  const attrs = item?.attributes ?? item ?? {};
  return {
    id: String(item?.id ?? item?.documentId ?? attrs?.id ?? ''),
    attributes: {
      Title: attrs.Title,
      Content: attrs.Content,
      Description: attrs.Description,
      Keywords: attrs.Keywords,
      OgImage: attrs.OgImage,
    },
  };
};

const fetchArticle = async (slug: string): Promise<Article> => {
  const siteDocId = await getSiteDocumentId();
  const filteredUrl = siteDocId
    ? `/articles?filters[slug][$eq]=${slug}&filters[site][documentId][$eq]=${siteDocId}&populate=*&publicationState=live`
    : `/articles?filters[slug][$eq]=${slug}&populate=*&publicationState=live`;
  try {
    const response = await axiosApi.get<{ data: any[] }>(filteredUrl);
    const raw = Array.isArray(response.data?.data) ? response.data.data[0] : null;
    if (!raw) {
      throw new Error('Article not found');
    }
    return normalize(raw);
  } catch (e: any) {
    const fallbackUrl = `/articles?filters[slug][$eq]=${slug}&populate=*&publicationState=live`;
    const response = await axiosApi.get<{ data: any[] }>(fallbackUrl);
    const raw = Array.isArray(response.data?.data) ? response.data.data[0] : null;
    if (!raw) {
      throw new Error('Article not found');
    }
    return normalize(raw);
  }
};

export const generateMetadata = async ({ params }: BlogArticleProps): Promise<Metadata> => {
  const article = await fetchArticle(params.slug);

  return {
    title: article.attributes.Title,
    description: article.attributes.Description,
    keywords: article.attributes.Keywords,
    openGraph: {
      title: article.attributes.Title,
      description: article.attributes.Description,
      url: `https://marketdb.pro/articles/${params.slug}`,
      type: "article",
      images: [
        {
          url: article.attributes.OgImage,
          width: 1200,
          height: 630,
          alt: article.attributes.Title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.attributes.Title,
      description: article.attributes.Description,
      images: [
        {
          url: article.attributes.OgImage,
          alt: article.attributes.Title,
        },
      ],
    },
  };
};

const BlogArticle = async ({ params }: BlogArticleProps) => {
  const article = await fetchArticle(params.slug);

  return (
    <div className="article">
      <h1>{article.attributes.Title}</h1>
      <BlocksRenderer content={article.attributes.Content} />
    </div>
  );
};

export default BlogArticle;
