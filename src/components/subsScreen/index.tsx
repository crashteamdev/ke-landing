import { useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const SubsScreen = () => {

    const [threeMonth, setThreeMonth] = useState(false);

    return (
        <div className="subs-screen">
            {/* <div className="circle-bg" style={{
                background: "url(./images/bg/bg-subs.svg)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right",
                backgroundSize: "100%"
            }}></div> */}
            <div className="container">
                <div className="subs-screen-row">
                    <div className="title">Тарифы</div>
                    <div className="tabs">
                        <div className={!threeMonth ? 'tabs-item active' : 'tabs-item'} onClick={() => setThreeMonth(!threeMonth)}>
                            <span>1 месяц</span>
                        </div>
                        <div className={threeMonth ? 'tabs-item active' : 'tabs-item'} onClick={() => setThreeMonth(!threeMonth)}>
                            <span>3 месяца</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container container-subs-swiper">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={4}
                    className="subs-list"
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                        },
                        475: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        890: {
                            slidesPerView: 2.9,
                        },
                        1200: {
                            slidesPerView: 4,
                        }
                    }}
                >
                    <SwiperSlide className="subs-item">
                        <div className="subs-item__title">Бесплатный</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>Free</span>
                            {!threeMonth ?
                                <div className="subs-item__name--date"> / месяц</div>
                                :
                                <div className="subs-item__name--date"> / 3 месяца</div>
                            }
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </SwiperSlide>
                    <SwiperSlide className="subs-item">
                        <div className="subs-item__title">Базовый</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>800₽</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </SwiperSlide>
                    <SwiperSlide className="subs-item">
                        <div className="subs-item-popular btn btn--orange">Популярный</div>
                        <div className="subs-item__title">Расширенный</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>Free</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </SwiperSlide>
                    <SwiperSlide className="subs-item">
                        <div className="subs-item__title">Профессиональный</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>Free</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </SwiperSlide>
                </Swiper>
                {/* <div className="subs-list">
                    <div className="subs-item">
                        <div className="subs-item__title">Бесплатный</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>Free</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </div>
                    <div className="subs-item">
                        <div className="subs-item__title">Базовый</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>800₽</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </div>
                    <div className="subs-item">
                        <div className="subs-item-popular btn btn--orange">Популярный</div>
                        <div className="subs-item__title">Расширенный</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>Free</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </div>
                    <div className="subs-item">
                        <div className="subs-item__title">Профессиональный</div>
                        <div className="subs-item__desc">Проанализируем каждый товар в покупках ваших клиентов</div>
                        <div className="subs-item__name">
                            <span>Free</span>
                            <div className="subs-item__name--date"> / месяц</div>
                        </div>
                        <div className="subs-advantages">
                            <div className="subs-advantages__item active">Внешняя аналитика</div>
                            <div className="subs-advantages__item active">Сравнительный анализ категорий</div>
                            <div className="subs-advantages__item">SEO-оптимизация</div>
                            <div className="subs-advantages__item">События</div>
                            <div className="subs-advantages__item">Внутреняя аналитика</div>
                            <div className="subs-advantages__item">Планировщик поставок</div>
                            <div className="subs-advantages__item">События</div>
                        </div>
                        <a href="#" className='btn btn--orange'>Попробовать</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
};

export default SubsScreen;