import ArrowIcon from '../../components/icons/arrowIcon';
import PhoneIcon from '../../components/icons/phoneIcon';
import './style.scss';


interface IProps {
    headerLayout?: 1 | 2;
}


const Header: React.FC = ({ headerLayout }: IProps) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row header-row">
                    <div className='header-left'>
                        <a href="/" className="header-logo">
                            <img src="./images/logo.svg" alt="" />
                        </a>
                        <div className="header-menu">
                            <a className='active' href="/">Главная</a>
                            <a href="/">
                                Тарифы
                                <ArrowIcon color="white" />
                            </a>
                            <a href="/">О нас</a>
                        </div>
                    </div>
                    <div className="header-right">
                        <a className='header-phone' href="+7 800 999 99 99">
                            <PhoneIcon color="white" />
                            +7 800 999 99 99
                        </a>
                        <a className='btn' href="/">Войти</a>
                    </div>
                    <div className="header-burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;