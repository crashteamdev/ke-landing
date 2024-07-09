"use client";

import { axiosApi } from "@/shared/api/axios";
import { AppCard } from "@/shared/components/AppCard";
import { useQuery } from "@tanstack/react-query";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MarketDB | Блог про маркетплейсы",
    description: "Читайте наш блог, чтобы быть в курсе событий и учиться новому! Увеличивай продажи с нами.",
    keywords: "магнит маркет, как продавать на магнит маркет, как продавать на узум, узум, uzum, KE, kazanexpress, блог про маркетплейсы, как увеличить продажи на маркетплейсах",
    openGraph: {
        title: "MarketDB | Блог про маркетплейсы",
        description: "Читайте наш блог, чтобы быть в курсе событий и учиться новому! Увеличивай продажи с нами.",
        url: "https://marketdb.pro/blog",
        type: "website",
        images: [
            {
                url: "/images/inform.png",
                width: 1200,
                height: 630,
                alt: "Блог про маркетплейсы",
            },
        ],
    }
}

const PageBlog = () => {

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
                                image={`http:/localhost:1337${item.attributes.ImgArticle.data.attributes.formats.medium.url}`}
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

export default PageBlog;