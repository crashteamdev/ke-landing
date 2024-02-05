import { AppModal } from "@/shared/components/AppModal";
import { APISRMLEAD } from "@/shared/config";
import { useMask } from "@react-input/mask";
import clsx from "clsx";
import { FormikErrors, useFormik } from "formik";
import Image from "next/image";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

interface Values {
    name: string;
    email: string;
    phone: string;
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


export const AppModalDemo = (open: any, handleClose: any) => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [timeout, setTimeout] = useState(false);
    
    const inputRef = useMask({ mask: '+7 (___) ___-__-__', replacement: { _: /\d/ } });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
        },
        validate,
        onSubmit: async (values) => {
            setTimeout(true);
            await fetch(APISRMLEAD, {
                method: "POST",
                headers: {
                    "X-Request-ID": uuidv4(),
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "leadType": "demo",
                    "userIdentity": {
                        "firstname": values.name
                    },
                    "userPhoneNumber": values.phone,
                    "userEmail": values.email
                })
            }).then((data) => {
                if(data.status === 200) {
                    setSuccess(true);
                    setTimeout(false);
                } else {
                    setError(true);
                    setTimeout(false);
                }
            });
        },
    });
    
    return (
        <AppModal
            className='flex justify-center items-center'
            isOpen={open}
            closeHandler={handleClose}
        >
            <div className='form w-full !max-w-full !h-full'>
                {!success ?
                    <>
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
                        {error && <div className='mt-4 text-[red]'>Неизвестная ошибка! Обратитесь в тех.поддержку.</div>}
                    </>
                :
                    <div className='flex flex-col justify-center items-center'>
                        <div className='mb-[30px]'>
                            <Image src="/images/icon/success.png" width={68} height={68} alt="Успешно" />
                        </div>
                        <div className="form-title">Спасибо за заявку!</div>
                        <div className="form-desc">Мы свяжемся с вами в ближайшее время.</div>
                    </div>
                }

                {timeout &&
                    <div className='absolute w-full h-full bg-blueGray-100/60 right-0 top-0 flex items-center justify-center'>
                        <span className="loader"></span>
                    </div>
                }
            </div>
        </AppModal>
    )
};