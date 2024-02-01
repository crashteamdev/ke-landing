"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import ArrowIcon from '@/shared/components/icons/arrowIcon';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { type Swiper as SwiperTypes } from "swiper";
import { posts } from './statics/posts';

export const SellServices = () => {
    const swiperRef = useRef<SwiperTypes>();
    const shortenedText = (text:string) => {
        return text.length > 100 ? text.slice(0, 100) + "..." : text;
    }
    return (
        <div className="posts-screen overflow-hidden">
            <div className="container">
                <div className="row-post">
                    <div className='flex flex-col'>
                        <div className="title">Делегируйте задачи профессионалам</div>
                        <div className="desc w-full max-w-[500px]">Хотите сэкономить время и силы? Не ищите подрядчиков, все услуги по маркетплейсам через одного менеджера.</div>
                    </div>
                    <div className="slider-navigation">
                        <div onClick={() => swiperRef.current?.slidePrev()} className="slider-navigation__arrow slider-navigation__arrow-prev">
                            <ArrowIcon color='#959595' />
                        </div>
                        <div onClick={() => swiperRef.current?.slideNext()} className="slider-navigation__arrow slider-navigation__arrow-next">
                            <ArrowIcon color='#959595' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView="auto"
                    slidesPerGroup={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    pagination={{
                        clickable: true
                    }}
                    className="post-swiper"
                    breakpoints={{
                        768: {
                            slidesPerGroup: 2,
                        },
                        1024: {
                            slidesPerGroup: 3,
                            slidesPerView: 3,
                        }
                    }}
                >
                    {posts.map((item, key) => (
                        <SwiperSlide key={key} className="post-item">
                            <div>
                                <div className="post-item__img">
                                    <Image height={229} width={380} src={item.img} alt="" />
                                </div>
                                <div className="post-item-content">
                                    <div className="post-item__title">{item.title}</div>
                                    <div className="post-item__desc">{item.desc}</div>
                                    <a href={item.link}>Подробнее</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};