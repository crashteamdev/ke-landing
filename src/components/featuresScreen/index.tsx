import './style.scss';
import { useWindowSize } from "@uidotdev/usehooks";

const FeaturesScreen: React.FC = () => {
    const size = useWindowSize();
    return (
        <div className="features-screen">
            <div className="container">
                <div className="title">Дополнительные возможности</div>
                <div className="desc">Ознакомьтесь с нашими дополнительными возможностями</div>
                <div className="features-list">
                    <div className='features-list-column features-list-column--first'>
                        <div className="features-list-item features-list-item--dark">
                            <div className='features-list-item-content'>
                                <div className="features-list-item__title">Изучение дополнительной <br />статистики по категориям</div>
                                <div className="features-list-item__desc">С помощью дополнительной<br />информации по категориям <br />вы сможете принимать<br />верные решения для<br /> работы на маркетплейсе.</div>
                                <a href="https://space.marketdb.pro/" className="features-list-item__link">Попробовать бесплатно</a>
                            </div>
                            {(size?.width! >= 1080) && <img src="./images/features-1.png" alt="" />}
                        </div>
                        <div className="features-list-item features-list-item--blue">
                            {(size?.width! >= 1080) && <img src="./images/features-2.png" alt="" /> }
                            <div className='features-list-item-content'>
                                <div className="features-list-item__title">Изучение рынка и потребностей клиентов и других факторов</div>
                                <div className="features-list-item__desc">Отчеты позволять вам определить какие товары лучше всего продаются, а какие имеют высокую конкуренцию</div>
                                <a href="https://space.marketdb.pro/" className="features-list-item__link">Попробовать бесплатно</a>
                            </div>
                        </div>
                    </div>
                    <div className='features-list-column features-list-column--full'>
                        <div className="features-list-item">
                            <div className="features-list-item__title">ABC Анализ в Excel отчетах</div>
                            <div className="features-list-item__desc">ABC Продажи и ABC Выручка в отчетах позволят здаров смотреть и выбирать товар для поставки на маркетплейсы</div>
                            <a href="https://space.marketdb.pro/" className="features-list-item__link">Попробовать бесплатно</a>
                            {(size?.width! >= 1080) && <img src="./images/features-3.png" alt="" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default FeaturesScreen;
