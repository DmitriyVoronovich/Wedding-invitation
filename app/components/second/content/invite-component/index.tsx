import React from 'react';
import s from './invite-component.module.scss';
import {InvitePreload} from "@/types/inviteGroups.type";
import {inviteText} from "@/app/admin/components/panel/utils";

const InviteComponent = ({inviteInfo}: { inviteInfo?: InvitePreload }) => {
    const inviteTextValue = inviteText(inviteInfo);

    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                    <h2 className={s.section_title}>Мы женимся</h2>
                    <div className={s.text_wrapper}>
                        <p className={s.text}>{inviteTextValue}</p>
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
