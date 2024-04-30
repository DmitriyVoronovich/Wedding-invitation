import React from 'react';
import s from './invite-component.module.scss';
import Image from "next/image";
import fon1 from '../../../../Accets/second/fon_image_one.jpg';
import fon2 from '../../../../Accets/second/fon_image_two.jpg';
import fon3 from '../../../../Accets/second/fon_section_three2.jpg';

const InviteComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                    <h2 className={s.section_title}>Мы женимся</h2>
                    <div className={s.text_wrapper}>
                        <p className={s.text}>Дорогие <b>Виталий</b> и <b>Дарья</b>!</p>
                        <p className={s.text}>С большой радостью мы приглашаем вас присоединиться к нам в наш особенный
                            день
                            – день нашей свадьбы и венчания.</p>
                        <p className={s.text}>Этот день будет одним из самых значимых и счастливых в нашей жизни
                            , и ваше присутствие сделает его еще более особенным. Мы надеемся разделить с вами радость
                            и торжественность этого момента.</p>
                        <p className={s.text}>С нетерпением ожидаем встречи с вами.</p>
                        <h3 className={s.text}><b>27 ИЮЛЯ 2024</b></h3>
                        <p className={s.text}>С любовью, Павел и Алина ♡♡♡ </p>
                        <p className={s.text}>P.S.: Отличной альтернативой цветам может стать бутылочка алкагольного
                            напитка,
                            упаковочка зернового кофе или вкусного чая.:)</p>
                    </div>
                </div>
            </div>
        </section>
    )
        ;
};

export default InviteComponent;