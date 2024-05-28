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
                    <p className={s.section_description}>
                        Наше торжество начнется с венчания в Костеле Святой Терезы в 15:00. Затем мы отправимся на фуршет и банкет в уютную Усадьбу "Долина Заречная", где будем наслаждаться вкусной едой, теплой компанией и, конечно же, танцами до полуночи. А уже на следующий день, мы продолжим наше празднование в том же месте, наслаждаясь днем на свежем воздухе.
                        Мы с нетерпением ждем встречи с вами и надеемся, что этот день станет для нас всех незабываемым!
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
