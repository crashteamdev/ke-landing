"use client";

import Image from 'next/image';
import './style.scss';
import Link from 'next/link';
import { AppModal } from '@/shared/components/AppModal';
import { useModal } from '@/shared/hooks/useModal';

import MailIcon from '@/shared/components/icons/mailIcon';
import './style.scss';
import PhoneIcon from '@/shared/components/icons/phoneIcon';
import { useFormik, FormikErrors, FormikValues } from 'formik';
import clsx from 'clsx';
import { useMask } from '@react-input/mask';

interface Values {
    name: string;
    email: string;
    phone: string;
    comment: string;
}

const validate = (values: Values): FormikErrors<Values> => {
    const errors: FormikErrors<Values> = {};
    if (!values.name) {
      errors.name = 'Required';
    } else if (values.name.length > 15) {
      errors.name = 'Must be 15 characters or less';
    }
  
    if (!values.phone) {
      errors.phone = 'Required';
    } else if (values.phone.length > 20) {
      errors.phone = 'Must be 20 characters or less';
    }
  
    if (!values.email) {
      errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    return errors;
  };

const MainScreen: React.FC = () => {
    const { open, handleToggle, handleClose } = useModal();
    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            comment: ""
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <div className="main-screen developer">
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
                <div className='absolute right-0 w-full h-full flex justify-end items-center max-[992px]:hidden'>
                    <div className='w-full max-w-[880px] h-[668px] relative max-[1400px]:max-w-[600px] max-[1400px]:h-[500px]'>
                        <Image fill className='' src="/images/inform.png" alt="Аналитика KazanEpxress / Магнит Маркет" />
                    </div>
                </div>
            </div>
            <AppModal
                className='flex justify-center items-center'
                isOpen={open}
                closeHandler={handleClose}
            >
                <div className='form w-full !max-w-full !h-full'>
                    <div className="form-title">Протестируй бесплатно</div>
                    <div className="form-desc w-full max-w-[400px]">Оставь заявку, и мы откроем бесплатный доступ к сервису на 5 дней.</div>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="" className='w-full'>
                            <input
                                id="name"
                                type="text" 
                                placeholder='Имя' 
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                className={clsx("", {
                                    "!border !border-[red]": formik.errors.name
                                })}
                            />
                            <input 
                                id="phone"
                                type="text" 
                                placeholder='+7 (_ _ _) _ _ _   _ _  _ _' 
                                onChange={formik.handleChange}
                                value={formik.values.phone}
                                className={clsx("", {
                                    "!border !border-[red]": formik.errors.phone
                                })}
                                ref={inputRef}
                            />
                        </label>
                        <label htmlFor="email">
                            <input 
                                id="email"
                                type="email" 
                                placeholder='E-mail' 
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                className={clsx("", {
                                    "!border !border-[red]": formik.errors.email
                                })}
                            />
                        </label>
                        <div className='form-send'>
                            <button type="submit" className="btn btn--orange">Отправить заявку</button>
                            <span>Нажимая на кнопку, вы даете <a href="/privacy">согласие на обработку своих персональных данных</a></span>
                        </div>
                    </form>
                </div>
            </AppModal>
        </>
    );
};

export default MainScreen;
