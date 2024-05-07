import React, {useState} from 'react';
import s from './schedule_main.module.scss';
import {SCHEDULE_LIST} from "@/app/constant/constant";
import {EnvironmentOutlined} from "@ant-design/icons";

export const ScheduleMainComponent = () => {
    const [all, setAll] = useState(false);

    const onToggleChange = () => {
        setAll(!all)
    }

    const scheduleList = all ? SCHEDULE_LIST : SCHEDULE_LIST.slice(0,2)

    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                    <h5 className={s.section_title}>Время & Место</h5>
                    <p className={s.section_description}>
                        27 Июля, 2024, 15:00<br/>
                        Щучин, Костел Святой Терезы
                    </p>
                    <h5 className={s.section_title}>О мероприятии</h5>
                    <p className={s.section_description}>I’m an event description.
                        Click here to open up the Event Editor and change my text. Simply click me,
                        Manage Event and start editing your event. I’m a great place for you to say a little
                        more about your upcoming event. People like to know what they are getting before they show
                        up to an event so use this space to give people a reason to come!
                    </p>
                    <h5 className={s.section_title}>Расписание</h5>
                    <ul className={s.list_wrapper}>
                        {scheduleList.map((item) => {
                            return (
                                <li  key={item.id} className={s.item_wrapper}>
                                    <div className={s.item_time_wrapper}>
                                        <span>{item.time}</span>
                                        <span className={s.interval}>{item.interval}</span>
                                    </div>
                                    <div className={s.item_place_wrapper}>
                                        <span>{item.name}</span>
                                        <div className={s.place_wrap}>
                                            <EnvironmentOutlined style={{fontSize: '18px'}}/><span className={s.place}> {item.place}</span>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    <button className={s.description_button} onClick={onToggleChange}>{all ? 'Свернуть' : 'Показать всё'}</button>
                </div>
            </div>
        </section>
    );
};