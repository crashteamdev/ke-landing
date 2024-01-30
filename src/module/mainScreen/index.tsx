"use client";

import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';

const MainScreen: React.FC = () => {
    const { open, handleToggle, handleClose } = useModal();
    return (
        <>
            <div className="main-screen">
                <div className="container relative z-50">
                    <div className="row main-screen-row">
                        <div>
                            <div className="main-screen-title">Аналитика KazanExpress / Магнит Маркет</div>
                            <div className="main-screen-desc">
                                Сервис аналитики KazanExpress / Магнит Маркет на основе браузерного расширения для Chrome, Opera, Mozilla и Яндекс браузер.
                                </div>
                            <div className="main-screen-btn-list">
                                <Link href={""} onClick={() => handleToggle()} className='btn btn--orange'>Попробовать бесплатно</Link>
                                <Link
                                    href="/"
                                    className='btn'
                                >
                                    Узнать тарифы
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 w-full h-full flex justify-end items-center'>
                    <div className='w-full max-w-[880px] h-[668px] relative'>
                        <Image fill className='' src="/images/inform.png" alt="Аналитика KazanEpxress / Магнит Маркет" />
                    </div>
                </div>
            </div>
            <AppModal
                className='flex justify-center items-center'
                isOpen={open}
                closeHandler={handleClose}
            >
                
            </AppModal>
        </>
    );
};

export default MainScreen;
