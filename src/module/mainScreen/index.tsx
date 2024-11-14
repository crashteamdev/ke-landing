"use client";

import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { useModal } from '@/shared/hooks/useModal';

import './style.scss';
import { AppModalDemo } from '@/components/AppModalDemo';
import { Link as ScrollLink } from 'react-scroll';

const MainScreen: React.FC = () => {

    const { open, handleToggle, handleClose } = useModal();
    return (
        <>
            <div className="main-screen developer">
                <div className="container relative z-[1]">
                    <div className="row main-screen-row">
                        <div>
                            <div className="main-screen-title">Аналитика Магнит Маркет и Uzum</div>
                            <div className="main-screen-desc">
                                Самая большая и точная аналитика для Магнит Маркет и Uzum по доступной цене!
                            </div>
                            <div className="main-screen-btn-list">
                                <Link href={""} onClick={() => handleToggle()} className='btn btn--orange'>Попробовать бесплатно</Link>
                                <ScrollLink 
                                    to={"tariff"} 
                                    spy={true} 
                                    smooth={true} 
                                    duration={500}
                                    className='btn'
                                >
                                    Наши тарифы
                                </ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='absolute right-0 w-full h-full flex justify-end items-center max-[992px]:hidden'>
                    <div className='w-full max-w-[880px] h-[668px] relative max-[1400px]:max-w-[600px] max-[1400px]:h-[500px]'>
                        <Image 
                            blurDataURL="URL" 
                            placeholder="blur" 
                            fill className='' 
                            src="/images/inform.png" 
                            alt="Аналитика Магнит Маркет и Uzum" 
                        />
                    </div>
                </div>
            </div>
            <AppModalDemo open={open} handleClose={handleClose} />
        </>
    );
};

export default MainScreen;
