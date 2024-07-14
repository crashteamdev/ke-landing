"use client";

import './style.scss';
import Image from 'next/image';
import moment from "moment";
import 'moment/locale/ru';
moment.locale('ru');

interface IPropsAppCard {
    [key: string]: string;
}

export const AppCard = ({
    title,
    image = "/images/posts/post-1.png",
    href = "/",
    desc,
    date,
    tag,
}: IPropsAppCard) => {
    return (
        <div className="post-item">
            <a href={href}>
                <div className="post-item__img">
                    <Image height={229} width={380} src={image} alt="" />
                </div>
                <div className="post-item-content">
                    <div className="post-item__title">{title}</div>
                    <div className="post-item__desc">{desc}</div>
                    <div className="post-item-bottom">
                        <div className="post-item__date">{date}</div>
                        <div className="post-item__site">{tag}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}