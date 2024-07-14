"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "@/shared/api/axios";

interface ArticleAttributes {
  Title: string;
  Description: string;
  Tag: string;
  createdAt: string;
  ImgArticle: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
  slug: string;
}

interface Article {
  id: string;
  attributes: ArticleAttributes;
}

const getArticles = async (): Promise<Article[]> => {
  const url = `/articles?populate=*`;
  const response = await axiosApi.get<{ data: Article[] }>(url);
  return response.data.data;
};

export const useArticles = () => {
  return useQuery<Article[], Error>({
    queryKey: ["articles"],
    queryFn: getArticles,
  });
};
