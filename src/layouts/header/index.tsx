import { useState } from 'react';
import ArrowIcon from '../../components/icons/arrowIcon';
import PhoneIcon from '../../components/icons/phoneIcon';
import './style.scss';
import CloseIcon from '../../components/icons/close';


interface IProps {
    headerLayout?: 1 | 2;
}


const Header: React.FC = ({ headerLayout }: IProps) => {
    const [burger, setBurger] = useState(false);
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
                    <div className="header-burger" onClick={() => setBurger(true)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
            {burger &&
                <div className="header-mob-menu">
                    <div>
                        <div className="header-mob-menu-top">
                            <a href="/" className="header-logo">
                                <img src="./images/logo-mob.svg" alt="" />
                            </a>
                            <div onClick={() => setBurger(false)}>
                                <CloseIcon color='#1A1A1A' />
                            </div>
                        </div>
                        <div className="header-mob-menu-content">
                            <a href="/">Главная</a>
                            <a href="/">Тарифы</a>
                            <a href="/">О нас</a>
                        </div>
                    </div>
                    <div className="header-mob-menu-bottom">
                        <a href="tel:+7 800 999 99 99" className='header-mob-menu-phone'>
                            <PhoneIcon color='#1A1A1A' />
                            +7 800 999 99 99
                        </a>
                        <a href="/" className="btn">Войти</a>
                    </div>
                </div>
            }
        </header>
    )
};

export default Header;