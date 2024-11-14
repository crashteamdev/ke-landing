"use client";

import { useState } from 'react';
import './style.scss';
import Image from 'next/image';

const AboutServicesScreen: React.FC = () => {

    const [activeTab, setActiveTab] = useState("tabs1");

    return (
        <div className="about-services-screen">
            <div className="container">
                <div className="about-services-screen-row">
                    <div className='about-services-screen-bg relative w-full h-[622px] max-w-[751px]'>
                        <Image fill src="/images/pc.png" alt="" />
                    </div>
                    <div className='about-services-screen-column'>
                        <div className="title">Для кого подходит сервис?</div>
                        {/* <div className="tabs">
                            <div className={activeTab === "tabs1" ? "active tabs-item" : "tabs-item"} onClick={() => setActiveTab('tabs1')}>
                                <span>Новичок</span>
                            </div>
                            <div className={activeTab === "tabs2" ? "active tabs-item" : "tabs-item"} onClick={() => setActiveTab('tabs2')}>
                                <span>Действующему селлеру</span>
                            </div>
                            <div className={activeTab === "tabs3" ? "active tabs-item" : "tabs-item"} onClick={() => setActiveTab('tabs3')}>
                                <span>Крупному бизнесу</span>
                            </div>
                        </div> */}
                        <div className="about-services-list">
                            {activeTab === "tabs1" && (
                                <>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Для новичков</div>
                                            <div className="about-services-item__desc">Определиться с товарами для первых поставок, изучить рынок</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-1.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Для менеджеров</div>
                                            <div className="about-services-item__desc">Изучайте спрос и товары конкурентов, чтоб сделать магазины клиентов прибыльнее!</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-2.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Владельцы производств</div>
                                            <div className="about-services-item__desc">С легкостью выходите на рынок, сделав предварительный анализ</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-3.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Бывалые продавцы</div>
                                            <div className="about-services-item__desc">Поддерживайте ассортимент товаров и держите конкурентов на короткой дистанции</div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "tabs2" && (
                                <>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Отчеты по категориям</div>
                                            <div className="about-services-item__desc">Для более детального изучения ниши - скачивать отчеты по категориям и магазинам.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-1.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Улучшить выдачу товара</div>
                                            <div className="about-services-item__desc">Отслеживать позицию товара в каждой категории.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-2.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Низкая цена</div>
                                            <div className="about-services-item__desc">Предоставляем все самое необходимое для аналитики при доступных ценах.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-3.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Анализ конкурентов</div>
                                            <div className="about-services-item__desc">Есть цель быть впереди конкурентов.</div>
                                        </div>
                                    </div>
                                </>
                            )}
                            {activeTab === "tabs3" && (
                                <>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Отчеты по категориям</div>
                                            <div className="about-services-item__desc">Обойти конкурентов и эффективно управлять бизнесом</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-1.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Улучшить выдачу товара</div>
                                            <div className="about-services-item__desc">Принимать взвешенные решения на основе точных данных</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-2.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Низкая цена</div>
                                            <div className="about-services-item__desc">Предоставляем все самое необходимое для аналитики при доступных ценах.</div>
                                        </div>
                                    </div>
                                    <div className="about-services-item">
                                        <div className="about-services-item-icon">
                                            <Image width={26} height={26} src="/images/icon/about-services-3.svg" alt="" />
                                        </div>
                                        <div className="about-services-item-content">
                                            <div className="about-services-item__title">Анализ конкурентов</div>
                                            <div className="about-services-item__desc">Масштабировать продажи и выйти на новые площадки</div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutServicesScreen;