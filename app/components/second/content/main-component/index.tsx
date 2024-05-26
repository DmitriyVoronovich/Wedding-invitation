import React from 'react';
import s from './main-section.module.scss';
import image from '../../../../Accets/images/CHEM7630_resized.jpeg'
import Image from "next/image";
import Link from "next/link";

export const MainSectionComponent = ({inviteId}: { inviteId?: string }) => {

    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <h4 className={s.section_title}>Мы женимся</h4>
                <h2 className={s.section_text}>Алина & Павел</h2>
                <div className={s.section_wrapper}>
                    <div className={s.description_wrapper}>
                        <p className={s.section_description}>Суббота, 27 Июля, 2024<br/> Костел Святой Терезы, Щучин
                        </p>
                        <Link href={`/schedule${'/' + inviteId || ''}`}>
                            <button className={s.description_button}>Расписание</button>
                        </Link>
                    </div>
                    <div className={s.image_wrapper}>
                        <Image src={image} alt={'Photos of the newlyweds'} className={s.image}/>
                    </div>
                </div>
            </div>
        </section>
    );
};
