import { useState } from 'react';
import './style.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

const SubsScreen = () => {

    const [threeMonth, setThreeMonth] = useState(false);

    const data = [
        {
            title: "Бесплатный",
            desc: "Проанализируем каждый товар в покупках ваших клиентов",
            price: 0,
        },
        {
            title: "Базовый",
            desc: "Проанализируем каждый товар в покупках ваших клиентов",
            price: 1470,
        },
        {
            title: "Расширенный",
            desc: "Проанализируем каждый товар в покупках ваших клиентов",
            price: 2190,
        },
        {
            title: "Продвинутый",
            desc: "Проанализируем каждый товар в покупках ваших клиентов",
            price: 3200,
        }
    ]

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
                    {data.map(item => (
                        <SwiperSlide className="subs-item">
                            <div className="subs-item__title">{item.title}</div>
                            <div className="subs-item__desc">{item.desc}</div>
                            <div className="subs-item__name">
                                <span>{!threeMonth ? item.price : item.price}₽</span>
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
                    ))}
                </Swiper>
            </div>
        </div>
    )
};

export default SubsScreen;