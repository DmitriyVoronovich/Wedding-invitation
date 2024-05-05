import React from 'react';
import s from './section-one.module.scss';
import Image from "next/image";
import fon1 from "@/app/Accets/images/CHEM7843_resized.jpg";
import fon2 from "@/app/Accets/images/CHEM8873_resized.jpg";
import fon3 from "@/app/Accets/images/CHEM8032_resized.jpg";

export const SectionOneComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.image_wrapper}>
                    <Image src={fon1} alt={'image one'} className={s.image_one}/>
                    <Image src={fon2} alt={'image two'} className={s.image_two}/>
                    <Image src={fon3} alt={'image three'} className={s.image_three}/>
                </div>
                <div className={s.phrase_wrapper}>
                    <p className={s.phrase_text}>
                        “Для мира ты всего лишь один человек, но для одного человека ты - весь мир”.
                    </p>
                    <span className={s.phrase_author}>Неизвестный</span>
                </div>
            </div>
        </section>
    );
};
