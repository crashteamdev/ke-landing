"use client";

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.scss';
import { posts } from './statisc';
import ArrowIcon from '@/shared/components/icons/arrowIcon';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { type Swiper as SwiperTypes } from "swiper";
import { AppCard } from '@/shared/components/AppCard';

const Posts: React.FC = () => {
    const swiperRef = useRef<SwiperTypes>();
    return (
        <div className="posts-screen overflow-hidden">
            <div className="container">
                <div className="row-post">
                    <div className="title">Наши статьи</div>
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
                            <AppCard 
                                title={item.title}
                                image={item.img}
                                href={item.link}
                                desc={item.desc}
                                date={item.date}
                                tag={item.site}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default Posts;