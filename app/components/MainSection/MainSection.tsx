import s from "./MainSection.module.css";
import Image from "next/image";
import img from "@/app/Accets/image1.png";
import svg from "@/app/Accets/svgSection/branch.svg";
import {MENU_LIST} from "@/app/constant/constant";

export default function MainSection() {
    return (
            <section className={s.section_one} id={MENU_LIST.main.href}>
                <div className={s.img_container}>
                    <Image src={img} alt={'img'} className={s.one_img}/>
                </div>
                <div className={s.text_container}>
                    <h1 className={s.one_title}>27 ИЮЛЯ 2024</h1>
                    <p className={s.one_description}>Приглашаем вас на наше
                        свадебное торжество!</p>
                    <span className={s.one_text}>С любовью, Павел и Алина</span>
                    <Image src={svg} alt={'svg'} className={s.one_svg}/>
                </div>
            </section>
    )
}
