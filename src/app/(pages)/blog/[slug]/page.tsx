import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { axiosApi } from '@/shared/api/axios';
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

interface BlogArticleProps {
  params: {
    slug: string;
  };
}

const fetchArticle = async (slug: string): Promise<Article> => {
  const url = `/articles?filters[slug][$eq]=${slug}`;
  const response = await axiosApi.get<{ data: Article[] }>(url);
  const article = response.data.data[0];
  
  if (!article) {
    throw new Error('Article not found');
  }

  return article;
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
