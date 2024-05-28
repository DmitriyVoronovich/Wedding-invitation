import React from 'react';
import s from './invite-component.module.scss';
import {InvitePreload} from "@types";
import {inviteText} from "@/app/admin/components/panel/utils";
// @ts-ignore
import {Fade} from "react-awesome-reveal";

const InviteComponent = ({inviteInfo, singleGuest = false}: { inviteInfo?: InvitePreload, singleGuest: boolean }) => {
    const inviteTextValue = inviteText(inviteInfo);

    return (
        <section className={s.section_container} id={'invite'}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                    <Fade triggerOnce={true} cascade={true} damping={0.3}>
                        <h2 className={s.section_title}>Мы женимся</h2>
                    </Fade>
                    <div className={s.text_wrapper}>
                        <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'}>
                            <p className={s.text}>{inviteTextValue}</p>
                            <p className={s.text}>Мы искренне приглашаем {singleGuest ? `тебя` : 'вас'} разделить с нами
                                радость и благодать в день
                                нашего венчания, который также станет днем нашей свадьбы.</p>
                            <p className={s.text}>Этот день, наполненный особой святыней и глубоким значением, будет
                                одним из самых важных в нашей жизни. {singleGuest ? 'Твое' : 'Ваше'} присутствие сделает
                                его еще более особенным и
                                незабываемым. Мы хотели бы разделить с этот момент священного единения.</p>
                            <p className={s.text}>С нетерпением ожидаем встречи с {singleGuest ? `тобой` : 'вами'}!
                            </p>
                            <h3 className={s.text}>27 ИЮЛЯ 2024</h3>
                            <p className={s.text}>С любовью, Павел и Алина ♡♡♡ </p>
                            <p className={s.text}>P.S.: Отличной альтернативой цветам может стать бутылочка алкогольного
                                напитка, небольшая упаковка зернового кофе или вкусного листового чая. :)</p>
                        </Fade>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default InviteComponent;
