"use client";

import { AppCardBlog } from "@/shared/components/AppCardBlog";
import { useArticles } from "@/shared/hooks/useArticles";

export const Blog = () => {
    const { isLoading, isSuccess, isError, data, error } = useArticles();

    const newData = data?.map((item) => {
        console.log(item.attributes.ImgArticle.data);
    })

    return (
        <div className="py-[30px] md:py-[60px]">
            <div className="title mb-[15px] md:mb-[30px]">Блог про маркетплейсы</div>
            {isLoading && <>Загрузка...</>}
            {isError && <>{error.message}</>}
            {isSuccess && (
                <>
                    {data.length !== 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {data.map((item) => (
                                <AppCardBlog key={item.id} item={item} />
                            ))}
                        </div>
                    ) : (
                        <>Упс... Статей не найдено 😔</>
                    )}
                </>
            )}
        </div>
    );
};
