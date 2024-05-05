import React from 'react';
import Image from "next/image";
import s from './schedule-component.module.scss';
import fon from '../../../../Accets/images/CHEM9032_resized.jpg'
import {EVENTS_LIST} from "@/app/constant/constant";

export const ScheduleSectionComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <h2 className={s.section_title}>
                    Приглашаем вас разделить с нами <br/>Радость нашей любви
                </h2>
                <div className={s.section_wrapper}>
                    <Image src={fon} alt={'section foto'} className={s.section_foto}/>
                    <div className={s.list}>
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
                    </div>
                </div>
            </div>
        </section>
    );
};
