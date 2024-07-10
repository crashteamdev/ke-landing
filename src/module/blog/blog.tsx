"use client";

import { axiosApi } from "@/shared/api/axios";
import { AppCard } from "@/shared/components/AppCard";
import { useQuery } from "@tanstack/react-query";

export const Blog = () => {

    const getArticles = async () => {
        const url = `/articles?populate=*`;
        try {
            const response = await axiosApi.get<any>(url);
            return response.data.data;
        } catch (error) {
            throw new Error("Failed to fetch");
        }
    };

    const { isLoading, isSuccess, isError, data } = useQuery<any>({
        queryKey: ["articles"], 
        queryFn: getArticles
    });

    return (
        <div className="py-[30px] md:py-[60px]">
            <div className="title mb-[15px] md:mb-[30px]">Блог про маркетплейсы</div>
            {isLoading && <>Загрука...</>}
            {isSuccess && 
                <>
                {data.length !== 0 ?
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.map((item: any) => (
                            <AppCard
                                key={item.id}
                                title={item.attributes.Title}
                                desc={item.attributes.Description}
                                tag={item.attributes.Tag}
                                date={item.attributes.Date}
                                image={`https://strapi.marketdb.pro${item.attributes.ImgArticle.data.attributes.url}`}
                                href={`/blog/${item.attributes.slug}`}
                            />
                        ))}
                    </div>
                : 
                    <>Упс... Статей не найдено 😔</>
                }
                </>
            }
        </div>
    )
}