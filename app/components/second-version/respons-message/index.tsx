import s from './respons-message.module.scss';
import pedro from '@accets/resp/pedro_gif.gif';
import sad from '@accets/resp/sad_gif.gif';
import Image from "next/image";

export const RespMessage = ({ans, willBeThere}: any) => (
    <div className={s.container}>
        <div className={s.wrapper}>
            {ans && <>
                <p className={s.message_text}>
                    {willBeThere
                        ? 'Все успешно отправлено, спасибо за ответ'
                        : 'Нам искренне жаль это слышать, спасибо за ответ'}
                </p>
                <Image unoptimized={true} src={willBeThere ? pedro : sad} alt={willBeThere ? 'pedro gif' : 'rain gif'}
                       className={s.gif}/>
            </>}
            {!ans && <p className={s.message_text}>Произошла ошибка, свяжитесь с нами</p>}
        </div>
    </div>
);
