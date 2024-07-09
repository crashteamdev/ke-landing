"use client";
import { axiosApi } from "@/shared/api/axios";
import { useQuery } from "@tanstack/react-query";
import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';

const BlogArticle = ({ params }: { params: { slug: string } }) => {

    const getArticle = async () => {
        const slug = params.slug;
        const url = `/articles?filters[slug][$eq]=${slug}`;
        try {
            const response = await axiosApi.get<any>(url);
            return response.data.data[0];
        } catch (error) {
            throw new Error("Failed to fetch");
        }
    };

    const { isLoading, isSuccess, isError, data } = useQuery<any>({
        queryKey: ["articles", params.slug], 
        queryFn: getArticle
    });

    if(isLoading) {
        return <>Загрузка...</>
    }

    return (
        <div className="article">
            <h1>{data.attributes.Title}</h1>
            <BlocksRenderer content={data.attributes.Content} />
        </div>
    )
}

export default BlogArticle;