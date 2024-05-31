import React from 'react';
import s from './section_two.module.scss';
import {Fade} from "react-awesome-reveal";

export const SectionTwoComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
               <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} >
                <h3 className={s.section_title}>
                    Будем рады видеть вас!
                </h3>
                </Fade>
            </div>
        </section>
    );
};