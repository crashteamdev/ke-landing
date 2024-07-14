"use client";
import { useQuery } from "@tanstack/react-query";
import { axiosApi } from "@/shared/api/axios";

interface ArticleAttributes {
  Title: string;
  Content: any;
}

interface Article {
  id: string;
  attributes: ArticleAttributes;
}

const getArticle = async (slug: string): Promise<Article> => {
    const url = `/articles?filters[slug][$eq]=${slug}`;
    const response = await axiosApi.get<{ data: Article[] }>(url);
    if (response.data.data.length === 0) {
        throw new Error("Article not found");
    }
    return response.data.data[0];
};

export const useArticle = (slug: string) => {
    return useQuery<Article, Error>({
        queryKey: ["article", slug],
        queryFn: () => getArticle(slug),
    });
};