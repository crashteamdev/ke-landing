"use client";

import MailIcon from '@/shared/components/icons/mailIcon';
import './style.scss';
import PhoneIcon from '@/shared/components/icons/phoneIcon';
import Image from 'next/image';
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

const DeveloperScreen: React.FC = () => {
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
        <div className="developer-screen">
            <div className="container">
                <div className="row developer-row">
                    <div className='developer-info'>
                        <div className='developer-info-content'>
                            <div className="title">Обратная связь</div>
                            <div className="desc">С нами можно связаться через почту <a className='underline' href="mailto:support@marketdb.ru">support@marketdb.ru</a> или через <a className='underline' href="https://t.me/marketdbchat">Телеграм чат</a></div>
                            <div className="developer-contacts">
                                <a href="mailto:support@marketdb.ru">
                                    <MailIcon color="#3C7BEB" />
                                    support@marketdb.ru
                                </a>
                                <a href="tel:+7 937 373 54 69">
                                    <PhoneIcon color="#3C7BEB" />
                                    +7 937 373 54 69
                                </a>
                            </div>
                        </div>
                        <Image width={300} height={300} src="/images/developer.png" alt="" />
                    </div>
                    <div className='form'>
                        <div className="form-title">Остались вопросы?</div>
                        <div className="form-desc">Оставь свой вопрос в форме и мы свяжемся с тобой!</div>
                        <form onSubmit={formik.handleSubmit}>
                            <label htmlFor="">
                                <div>
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
                                </div>
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
                            <label htmlFor="">
                                <textarea 
                                    id="comment"
                                    placeholder='Комментарий' 
                                    onChange={formik.handleChange}
                                    value={formik.values.comment}
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
                </div>
            </div>
        </div>
    )
};

export default DeveloperScreen;