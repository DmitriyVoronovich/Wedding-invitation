import React from 'react';
import s from './respons-message.module.scss';
import pedro from '../../../Accets/resp/педро.gif';
import grust from '../../../Accets/resp/200w.gif';
import Image from "next/image";

export const RespMessage = ({ans, willThereBe: willBeThere}: any) => {
    return (
        <div className={s.container}>
            {ans ?  willBeThere ? <div className={s.wrapper}>
                            <p className={s.message_text}>Все успешно отправлено, спасибо за ответ</p>
                            <Image src={pedro} alt={'pedro gif'} className={s.gif}/>
                        </div>
                        : <div className={s.wrapper}>
                            <p className={s.message_text}>Нам искренне жаль это слышать, спасибо за ответ</p>
                            <Image src={grust} alt={'rain gif'} className={s.gif}/>
                        </div>
                : <div className={s.wrapper}>
                    <p className={s.message_text}>Произошла ошибка, свяжитесь с нами</p>
                </div>
            }
        </div>
    );
};