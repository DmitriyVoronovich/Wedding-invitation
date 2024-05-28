import React from 'react';
import s from './respons-message.module.scss';
import pedro from '../../../Accets/resp/педро.gif';
import Image from "next/image";

export const RespMessage = ({ans}: any) => {
    return (
        <div className={s.container}>
            {ans ? <div className={s.wrapper}>
                    <p className={s.message_text}>Все успешно отпралено, спасибо за ответ</p>
                    <Image src={pedro} alt={'j'} className={s.gif}/>
                </div>
               : <div className={s.wrapper}>
                    <p className={s.message_text}>Произошла ошибка, свяжитесь с нами</p>
                </div>}
        </div>
    );
};