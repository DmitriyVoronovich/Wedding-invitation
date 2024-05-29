import React from 'react';
import s from "@/app/components/second/content/invite-component/invite-component.module.scss";
import e from './about-event-component.module.scss';
import {Fade} from "react-awesome-reveal";

export const AboutEventComponent = ({singleGuest = false}: { singleGuest?: boolean }) => {
    return (
        <section className={e.event_section_container}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                   <Fade triggerOnce={true} cascade={true} damping={0.3} >
                        <h2 className={e.section_title}>О мероприятии</h2>
                    </Fade>
                    <div className={s.text_wrapper}>
                       <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} >
                            <p className={s.text}>
                                Наше торжество начнется с венчания в Костеле Святой Терезы в 15:00.
                            </p>
                            <p className={s.text}>
                                Затем мы отправимся на фуршет и банкет в уютную Усадьбу &quot;Долина Заречная&quot;,
                                где будем наслаждаться вкусной едой, теплой компанией и, конечно же, танцами до
                                полуночи.
                            </p>
                            <p className={s.text}>
                                А уже на следующий день, мы продолжим наше празднование в том же месте, наслаждаясь днем
                                на свежем воздухе.
                            </p>
                            <p className={s.text}>
                                Мы с нетерпением ждем встречи с {singleGuest ? `тобой` : 'вами'} и надеемся, что этот день станет для нас всех
                                незабываемым!
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    );
};
