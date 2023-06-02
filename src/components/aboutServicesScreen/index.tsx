import './style.scss';

const AboutServicesScreen = () => {

    return (
        <div className="about-services-screen">
            <div className="container">
                <div className="about-services-screen-row">
                    <div className='about-services-screen-bg'>
                        <img src="./images/pc.png" alt="" />
                    </div>
                    <div className='about-services-screen-column'>
                        <div className="title">Для кого  подходит сервис?</div>
                        <div className="tabs">
                            <div className='tabs-item active'>
                                <span>Новичок</span>
                            </div>
                            <div className='tabs-item'>
                                <span>Действующему селлеру</span>
                            </div>
                            <div className='tabs-item'>
                                <span>Крупному бизнесу</span>
                            </div>
                        </div>
                        <div className="about-services-list">
                            <div className="about-services-item">
                                <div className="about-services-item-icon">
                                    <img src="./images/icon/about-services.svg" alt="" />
                                </div>
                                <div className="about-services-item-content">
                                    <div className="about-services-item__title">Приемущество, длинноее навзание </div>
                                    <div className="about-services-item__desc">Проанализируем каждый товар в покупках ваших клиентов. </div>
                                </div>
                            </div>
                            <div className="about-services-item">
                                <div className="about-services-item-icon">
                                    <img src="./images/icon/about-services-1.svg" alt="" />
                                </div>
                                <div className="about-services-item-content">
                                    <div className="about-services-item__title">Приемущество, длинноее навзание </div>
                                    <div className="about-services-item__desc">Проанализируем каждый товар в покупках ваших клиентов. </div>
                                </div>
                            </div>
                            <div className="about-services-item">
                                <div className="about-services-item-icon">
                                    <img src="./images/icon/about-services-2.svg" alt="" />
                                </div>
                                <div className="about-services-item-content">
                                    <div className="about-services-item__title">Приемущество, длинноее навзание </div>
                                    <div className="about-services-item__desc">Проанализируем каждый товар в покупках ваших клиентов. </div>
                                </div>
                            </div>
                            <div className="about-services-item">
                                <div className="about-services-item-icon">
                                    <img src="./images/icon/about-services-3.svg" alt="" />
                                </div>
                                <div className="about-services-item-content">
                                    <div className="about-services-item__title">Приемущество, длинноее навзание </div>
                                    <div className="about-services-item__desc">Проанализируем каждый товар в покупках ваших клиентов. </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutServicesScreen;