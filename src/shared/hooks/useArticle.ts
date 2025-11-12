"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "@/shared/api/axios";
import { SITE_SLUG } from "@/shared/config";

export interface ArticleAttributes {
  Title: string;
  Content: any;
  Description?: string;
  Keywords?: string;
  OgImage?: string;
}

export interface Article {
  id: string;
  attributes: ArticleAttributes;
}

const normalize = (item: any): Article => {
  const attrs = item?.attributes ?? item ?? {};
  return {
    id: String(item?.id ?? item?.documentId ?? attrs?.id ?? ""),
    attributes: {
      Title: attrs.Title,
      Content: attrs.Content,
      Description: attrs.Description,
      Keywords: attrs.Keywords,
      OgImage: attrs.OgImage,
    },
  };
};

const getArticle = async (slug: string): Promise<Article> => {
  const url = `/articles?filters[slug][$eq]=${slug}&filters[site][slug][$eq]=${SITE_SLUG}&populate=*&status=published`;
  const response = await axiosApi.get<{ data: any[] }>(url);
  const raw = Array.isArray(response.data?.data) ? response.data.data[0] : null;
  if (!raw) {
    throw new Error("Article not found");
  }
  return normalize(raw);
};

export const useArticle = (slug: string) => {
  return useQuery<Article, Error>({
    queryKey: ["article", slug],
    queryFn: () => getArticle(slug),
  });
};