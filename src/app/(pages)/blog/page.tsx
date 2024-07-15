import { Blog } from "@/module/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "MarketDB | Блог про маркетплейсы",
    description: "Читайте наш блог, чтобы быть в курсе событий и учиться новому! Увеличивай продажи с нами.",
    keywords: "магнит маркет, как продавать на магнит маркет, как продавать на узум, узум, uzum, KE, kazanexpress, блог про маркетплейсы, как увеличить продажи на маркетплейсах, mm.ru, uzum.ru",
    openGraph: {
        title: "MarketDB | Блог про маркетплейсы",
        description: "Читайте наш блог, чтобы быть в курсе событий и учиться новому! Увеличивай продажи с нами.",
        url: "https://marketdb.pro/blog",
        type: "website",
        images: [
            {
                url: "https://marketdb.pro/images/inform.png",
                width: 1200,
                height: 630,
                alt: "Блог про маркетплейсы",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MarketDB | Блог про маркетплейсы",
        description: "Читайте наш блог, чтобы быть в курсе событий и учиться новому! Увеличивай продажи с нами.",
        images: [
            {
                url: "https://marketdb.pro/images/inform.png",
                alt: "Блог про маркетплейсы",
            },
        ],
    },
};

const PageBlog = () => {
    return (
        <Blog />
    )
}

export default PageBlog;