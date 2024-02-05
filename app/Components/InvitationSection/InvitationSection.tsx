import s from './InvitationSection.module.css'
import Image from "next/image";
import svg from '../../Accets/svgHeart.png'
import {MENU_ITEM} from "@/app/Constant/constant";

export default function InvitationSection() {
    return (
        <section className={s.section_container} id={MENU_ITEM.INVITATION.id}>
            <h2 className={s.section_title}>МЫ ЖЕНИМСЯ</h2>
            <span className={s.second_title}>МЫ ЖЕНИМСЯ</span>
            <div className={s.text_container}>
                <p>Дорогие <b>Виталий</b> и <b>Дарья</b>!</p>
                <p>С большой радостью мы приглашаем вас присоединиться к нам в наш особенный день
                    – день нашей свадьбы и венчания.</p>
                <p>Этот день будет одним из самых значимых и счастливых в нашей жизни
                    , и ваше присутствие сделает его еще более особенным. Мы надеемся разделить с вами радость
                    и торжественность этого момента.</p>
                <p>С нетерпением ожидаем встречи с вами.</p>
            </div>
            <h3 className={s.section_date}>27 ИЮЛЯ 2024</h3>
            <p className={s.section_text}>С любовью, Павел и Алина ♡♡♡ </p>
            <p className={s.section_text}>P.S.: Отличной альтернативой цветам может стать бутылочка алкагольного напитка,
                упаковочка зернового кофе или вкусного чая.:)</p>
            <Image src={svg} alt={'src'} className={s.section_svg}/>
        </section>
    )
}