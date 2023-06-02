import MailIcon from '../../components/icons/mailIcon';
import PhoneIcon from '../../components/icons/phoneIcon';
import { VkIcon } from '../../components/icons/socialIcons';
import { TelegramIcon } from '../../components/icons/socialIcons';
import './style.scss';

interface IProps {
    footerLayout?: 1 | 2;
}

const Footer: React.FC = ({ footerLayout }: IProps) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <a href="/" className='footer-top-logo'>
                        <img src="./images/logo.svg" alt="" />
                    </a>
                    <div className="social-link">
                        <a href="#">
                            <TelegramIcon color='white' />
                        </a>
                        <a href="#">
                            <VkIcon color="white" />
                        </a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom-menu">
                        <a href="/">Главная</a>
                        <a href="/">Тарифы</a>
                        <a href="/">О нас</a>
                    </div>
                    <div className="footer-bottom-contacts">
                        <a href="mailto:info-email@marketbd.ru">
                            <MailIcon color='white' />
                            info@marketbd.ru
                        </a>
                        <a href="tel:8 800 999 99 99">
                            <PhoneIcon color="white" />
                            8 800 999 99 99
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-line"></div>
            <div className="container">
                <div className="footer-copyright-row">
                    <span>@MarketDB</span>
                    <div className='footer-copyright-link'>
                        <a href="">Политика  конфиденциальности и обработки данных</a>
                        <a href="">Политика возврата</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;