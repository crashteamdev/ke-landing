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
                        <div className="main-screen-title">Аналитика KazanExpress</div>
                        <div className="main-screen-desc">Сервис аналитики KazanExpress на основе браузерного расширения для Chome, Opera, Mozzila и Яндекс браузер.</div>
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