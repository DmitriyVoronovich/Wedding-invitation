import s from './sectionThree.module.css';
import Image from "next/image";
import heardSmall from '../../Accets/heard_small.png';
import castel from '../../Accets/Catholic_castel.png';
import banq from '../../Accets/banquet.png';
import buff from '../../Accets/buffet.png';
import second from '../../Accets/second_day.png';
import svg from '../../Accets/svgHeart.png'

export default function SectionThree() {

    const data = [
        {
            id: 1,
            name: 'ВЕНЧАНИЕ',
            place: 'Костел Святой Терезы',
            time: '15:00',
            image: castel,
            class: s.left,
            class2: ''
        },
        {
            id: 2,
            name: 'ФУРШЕТ',
            place: 'Усадьба Долина Заречная',
            time: '16:00',
            image: buff,
            class: s.right,
            class2: s.right_icon
        },
        {
            id: 3,
            name: 'БАНКЕТ',
            place: 'Усадьба Долина Заречная',
            time: '16:30',
            image: banq,
            class: s.left,
            class2: ''
        },
        {
            id: 4,
            name: '2 - Й ДЕНЬ',
            place: 'Усадьба Долина Заречная',
            time: '10:00',
            image: second,
            class: s.right,
            class2: s.right_icon
        }
    ]

    return (
        <section className={s.section_container} id={'Schedule'}>
            <h2 className={s.section_title}>СВАДЕБНЫЙ ДЕНЬ </h2>
            <span className={s.second_title}>СВАДЕБНЫЙ ДЕНЬ </span>
            <Image src={heardSmall} alt={'heard small'} className={s.small_heard}/>
            <div className={s.container}>
                <div className={s.start_point}></div>
                <div className={s.line}></div>
                <div className={s.end_point}></div>
                {data.map((item) => {

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