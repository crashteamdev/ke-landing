import './style.scss';

interface IProps {
    title: string,
    desc: string
}



const MainScreen = ({ title, desc }: IProps) => {
    return (
        <div className="main-screen">
            <div className="container">
                <div className="row main-screen-row">
                    <div>
                        <div className="main-screen-title">Умная аналитика маркетплейсов </div>
                        <div className="main-screen-desc">Проанализируем каждый товар в покупках ваших клиентов, дадим точную статистику по каждому наименованию в вашем магазине</div>
                        <div className="main-screen-btn-list">
                            <a href="#" className='btn btn--orange'>Попробовать бесплатно</a>
                            <a href="#" className='btn'>Узнать тарифы</a>
                        </div>
                    </div>
                    <div className='main-screen-img'>
                        <img src="./images/inform.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainScreen;