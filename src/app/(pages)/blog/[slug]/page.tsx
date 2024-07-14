import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import { axiosApi } from '@/shared/api/axios';

interface ArticleAttributes {
  Title: string;
  Content: BlocksContent;
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
