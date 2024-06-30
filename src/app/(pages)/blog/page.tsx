"use client";

import { axiosApi } from "@/shared/api/axios";
import { AppCard } from "@/shared/components/AppCard";
import { useQuery } from "@tanstack/react-query";

const PageBlog = () => {

    const getArticles = async () => {
        const url = `/articles?populate=*`;
        try {
            const response = await axiosApi.get<any>(url);
            return response.data;
        } catch (error) {
            throw new Error("Failed to fetch");
        }
    };

    const { isLoading, isSuccess, isError, data } = useQuery<any>({
        queryKey: ["articles"], 
        queryFn: getArticles
    });

    return (
        <div className="pt-[30px] md:pt-[60px]">
            <div className="title mb-[15px] md:mb-[30px]">Блог про маркетплейсы</div>
            {isLoading && <>Загрука...</>}
            {isSuccess && 
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {data.data.map((item: any) => (
                        <AppCard
                            key={item.id}
                            title={item.attributes.Titile}
                            desc={item.attributes.Titile}
                        />
                    ))}
                </div>
            }
        </div>
    )
}

export default PageBlog;