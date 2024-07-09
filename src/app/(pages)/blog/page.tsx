import { Blog } from "@/module/blog";
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
    return (
        <Blog />
    )
}

export default PageBlog;