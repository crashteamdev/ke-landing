import { useRef } from 'react';

import { Swiper as SwiperType, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import './style.scss';
import ArrowIcon from '../icons/arrowIcon';
import { posts } from './statisc';

const Posts: React.FC = () => {
    const swiperRef = useRef<SwiperType>();
    const shortenedText = (text:string) => {
        return text.length > 100 ? text.slice(0, 100) + "..." : text;
    }
    return (
        <div className="posts-screen">
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
                            <a href={item.link}>
                                <div className="post-item__img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="post-item-content">
                                    <div className="post-item__title">{item.title}</div>
                                    <div className="post-item__desc">{shortenedText(item.desc)}</div>
                                    <div className="post-item-bottom">
                                        <div className="post-item__date">{item.date}</div>
                                        <div className="post-item__site">{item.site}</div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default Posts;