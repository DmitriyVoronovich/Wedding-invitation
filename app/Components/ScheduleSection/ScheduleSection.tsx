import s from './ScheduleSection.module.css';
import Image from "next/image";
import heardSmall from '../../Accets/heard_small.png';
import svg from '../../Accets/svgHeart.png'
import {EVENTS_LIST, MENU_ITEM} from "@/app/Constant/constant";

export default function ScheduleSection() {

    return (
        <section className={s.section_container} id={MENU_ITEM.SCHEDULE.id}>
            <h2 className={s.section_title}>СВАДЕБНЫЙ ДЕНЬ </h2>
            <span className={s.second_title}>СВАДЕБНЫЙ ДЕНЬ </span>
            <Image src={heardSmall} alt={'heard small'} className={s.small_heard}/>
            <div className={s.container}>
                <div className={s.start_point}></div>
                <div className={s.line}></div>
                <div className={s.end_point}></div>
                {EVENTS_LIST.map((item) => {

                    return (
                        <div className={`${s.wrapper} ${item.class}`} key={item.id}>
                            <div className={`${s.text_container} ${item.class}`}>
                                <span className={s.time}>{item.time}</span>
                                <div className={s.text_wrapper}>
                                    <h5 className={s.name}>{item.name}</h5>
                                    <span className={s.place}>{item.place}</span>
                                </div>
                            </div>
                            <Image src={item.image} alt={item.name} className={`${s.img} ${item.class2}`}/>
                        </div>
                    )
                })}
                <Image src={svg} alt={'Heard'} className={s.section_svg}/>
            </div>
        </section>
    )
}