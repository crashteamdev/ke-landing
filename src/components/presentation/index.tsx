import { useRef, useState } from 'react';

import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import ArrowIcon from '../icons/arrowIcon';
const PresentationSlider = () => {

    const swiperRef = useRef<SwiperType>();
    return (
        <div className="presentation-slider" style={{ marginTop: "100px" }}>
            <div className="container">
                <div className="title">Инструменты аналитики</div>
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    modules={[Pagination, Navigation]}
                    slidesPerView={1}
                    className="presentation-swiper"
                >
                    <SwiperSlide className='presentation-swiper-item'>
                        <div className="presentation-swiper-item-content">
                            <div className="presentation-swiper-item__count">01</div>
                            <div className="presentation-swiper-item__title">Аналитика конкурентов</div>
                            <div className="presentation-swiper-item__desc">Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику </div>
                            <div className="presentation-swiper-item-arrows">
                                <div onClick={() => swiperRef.current?.slidePrev()} className="slider-navigation__arrow slider-navigation__arrow-prev">
                                    <ArrowIcon color='#959595' />
                                </div>
                                <div onClick={() => swiperRef.current?.slideNext()} className="slider-navigation__arrow slider-navigation__arrow-next">
                                    <ArrowIcon color='#959595' />
                                </div>
                            </div>
                        </div>
                        <div className="presentation-swiper-item-img">
                            <img src="./images/presentation/img-1.png" alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
};

export default PresentationSlider;