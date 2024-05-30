import React from 'react';
import s from './respons-message.module.scss';
import pedro from '../../../Accets/resp/педро.gif';
import grust from '../../../Accets/resp/200w.gif';
import Image from "next/image";

export const RespMessage = ({ans, willThereBe: willBeThere}: any) => {
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
                {ans && <>
                    <p className={s.message_text}>
                        {willBeThere
                            ? 'Все успешно отправлено, спасибо за ответ'
                            : 'Нам искренне жаль это слышать, спасибо за ответ'}
                    </p>
                    <Image src={willBeThere ? pedro : grust} alt={willBeThere ? 'pedro gif' : 'rain gif'}
                           className={s.gif}/>
                </>}
                {!ans && <p className={s.message_text}>Произошла ошибка, свяжитесь с нами</p>}
            </div>
        </div>
    );
};