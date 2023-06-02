import './style.scss';

const AboutScreen = () => {
    return (
        <div className="about-screen">
            <div className="container">
                <div className="row">
                    <div className='about-screen-content'>
                        <div className="title">О сервисе</div>
                        <div className="desc">
                            <p>KazanExpress.ru - это торговая площадка, на которой представлены наиболее выгодные китайские и российские товары с бесплатной доставкой за один день.</p>
                            <p>Заказы приходят на фирменные пункты выдачи с примерочными. Если вам не подойдет размер или не понравится качество товара, его можно вернуть при получении или в течение 7 дней.</p>
                            <p>Доставка осуществляется только в города с наличием собственных пунктов выдачи. Их количество растет ежемесячно.</p>
                        </div>
                    </div>
                    <div className='about-screen-number'>
                        <div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>8 965</div>
                                <div className='about-screen-number-item__desc'>Средний оборот селлеров, ₽</div>
                            </div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>978</div>
                                <div className='about-screen-number-item__desc'>Клиентов</div>
                            </div>
                        </div>
                        <div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>70,5</div>
                                <div className='about-screen-number-item__desc'>Средний рост выручки, %</div>
                            </div>
                            <div className="about-screen-number-item">
                                <div className='about-screen-number-item__title'>99</div>
                                <div className='about-screen-number-item__desc'>Точность аналитики, %</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutScreen;