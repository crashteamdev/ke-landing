// components/AppCard.tsx
"use client";

import './style.scss';
import Image from 'next/image';
import moment from "moment";
import 'moment/locale/ru';
import Head from 'next/head';
moment.locale('ru');

interface ArticleAttributes {
  Title: string;
  Description: string;
  Tag: string;
  createdAt: string;
  ImgArticle: {
    data: {
      attributes: {
        url: string | null;
      } | null;
    } | null;
  };
  slug: string;
}

interface Article {
  id: string;
  attributes: ArticleAttributes;
}

interface AppCardProps {
  item: Article;
}

export const AppCardBlog = ({ item }: AppCardProps) => {
  const { Title, Description, Tag, createdAt, ImgArticle, slug } = item.attributes;
  const imageUrl = ImgArticle?.data?.attributes?.url ? `https://strapi.marketdb.pro${ImgArticle.data.attributes.url}` : "/images/default.png";

  return (
    <>
      <div className="post-item">
        <a href={`/blog/${slug}`}>
          <div className="post-item__img">
            <Image height={229} width={380} src={imageUrl} alt={Title} />
          </div>
          <div className="post-item-content">
            <div className="post-item__title">{Title}</div>
            <div className="post-item__desc">{Description}</div>
            <div className="post-item-bottom">
              <div className="post-item__date">{moment(createdAt).format("DD MMMM YYYY")}</div>
              <div className="post-item__site">{Tag}</div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
