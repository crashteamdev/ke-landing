import './style.scss';

interface IProps {
    title: string,
    desc: string
}



const ServicesScreen = () => {
    return (
        <div className="services-screen">
            <div className="container">
                <div className="title">Какие задачи решает сервис?</div>
                <div className="desc">Проанализируем каждый товар </div>
                <div className="services-list">
                    <div className="services-item">
                        <div className="services-item__icon">
                            <img src="./images/icon/services-2.png" alt="" />
                        </div>
                        <div className="services-item__title">Изучение рынка</div>
                        <div className="services-item__desc">Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику </div>
                    </div>
                    <div className="services-item">
                        <div className="services-item__icon">
                            <img src="./images/icon/services-1.png" alt="" />
                        </div>
                        <div className="services-item__title">Аналитика конкурентов</div>
                        <div className="services-item__desc">Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику </div>
                    </div>
                    <div className="services-item">
                        <div className="services-item__icon">
                            <img src="./images/icon/services-2.png" alt="" />
                        </div>
                        <div className="services-item__title">Изучение рынка</div>
                        <div className="services-item__desc">Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику </div>
                    </div>
                    <div className="services-item">
                        <div className="services-item__icon">
                            <img src="./images/icon/services-1.png" alt="" />
                        </div>
                        <div className="services-item__title">Аналитика конкурентов</div>
                        <div className="services-item__desc">Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ServicesScreen;