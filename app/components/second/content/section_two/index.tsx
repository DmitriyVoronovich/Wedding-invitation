import React from 'react';
import s from './section_two.module.scss';

export const SectionTwoComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <h3 className={s.section_title}>
                    Будем рады видеть вас!
                </h3>
                <button className={s.description_button}>Расписание</button>
            </div>
        </section>
    );
};