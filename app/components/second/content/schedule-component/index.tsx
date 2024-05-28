import React, {useState} from 'react';
import Image from "next/image";
import s from './schedule-component.module.scss';
import fon from '../../../../Accets/images/CHEM9032_resized.jpg'
import {EVENTS_LIST} from "@/app/constant/constant";
import {ScheduleMapComponent} from "@/app/components/second/schedule_content/schedule-map";
import {Button} from "antd";
import {Fade} from "react-awesome-reveal";

export const ScheduleSectionComponent = () => {
    const [showMap, setShowMap] = useState(false);

    const onShowMap = () => setShowMap(!showMap);

    return (
        <section className={s.section_container} id={'schedule'}>
            <div className={s.container}>
               <Fade triggerOnce={true} cascade={true} damping={0.4} >
                <h2 className={s.section_title}>
                    Приглашаем вас разделить с нами <br/>Радость нашей любви
                </h2>
                </Fade>
                <div className={s.section_wrapper}>
                   <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} >
                    <Image src={fon} alt={'section foto'} className={s.section_foto}/>
                    </Fade>
                    <div className={s.list}>
                       <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} >
                        {EVENTS_LIST.map((item) => {
                            return (
                                <div key={item.id} className={s.list_item}>
                                    <span className={s.item_number}>0{item.id}.</span>
                                    <div className={s.item_event_wrapper}>
                                        <span className={s.event_title}>{item.name}</span>
                                        <p className={s.event_description}>{item.time}, {item.place}</p>
                                    </div>
                                </div>
                            )
                        })}
                        </Fade>
                    </div>
                </div>
            </div>
            {showMap && <ScheduleMapComponent/>}
            <div className={s.button_wrapper}>
                <Button className={s.description_button} onClick={onShowMap}>{showMap ? 'Скрыть карту' : 'Показать на карте'}</Button>
            </div>
        </section>
    );
};
