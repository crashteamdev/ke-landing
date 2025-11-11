"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "@/shared/api/axios";

type LegacyImageData = { attributes: { url: string | null } | null } | null;
export interface ArticleAttributes {
  Title: string;
  Description: string;
  Tag: string;
  createdAt: string;
  ImgArticle: { data: LegacyImageData };
  slug: string;
}

export interface Article {
  id: string;
  attributes: ArticleAttributes;
}

const extractImageUrl = (img: any): string | null => {
  if (!img) return null;
  // Common shapes we might receive from Strapi v5/v4
  if (img?.data?.attributes?.url) return img.data.attributes.url;
  if (img?.data?.url) return img.data.url;
  if (Array.isArray(img?.data) && img.data[0]?.attributes?.url) return img.data[0].attributes.url;
  if (img?.url) return img.url;
  return null;
};

const normalizeArticle = (item: any): Article => {
  const attrs = item?.attributes ?? item ?? {};
  const url = extractImageUrl(attrs.ImgArticle);
  return {
    id: String(item?.id ?? item?.documentId ?? attrs?.id ?? ""),
    attributes: {
      Title: attrs.Title,
      Description: attrs.Description,
      Tag: attrs.Tag,
      createdAt: attrs.createdAt,
      ImgArticle: {
        data: url ? { attributes: { url } } : null,
      },
      slug: attrs.slug,
    },
  };
};

const getArticles = async (): Promise<Article[]> => {
  const url = `/articles?populate=*&status=published`;
  const response = await axiosApi.get<{ data: any[] }>(url);
  const list = Array.isArray(response.data?.data) ? response.data.data : [];
  return list.map(normalizeArticle);
};

export const useArticles = () => {
  return useQuery<Article[], Error>({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
};
