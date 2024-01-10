import s from "./sectionLeft.module.css";
import Image from "next/image";
import {SectionPropsType} from "@/app/Components/SectionThree/sectionRight/SectionRight";

export default function SectionLeft(props: SectionPropsType) {
    const {title, secondTitle, img, time, address, place} = props

    return (
        <div className={s.section_container}>
            <div>
                <h4 className={s.section_title}>{title}</h4>
                <span className={s.section_second_title}>{secondTitle}</span>
                <div className={s.text_container}>
                    <span className={'one'}>Дата</span>
                    <span className={'two'}>27 Июля 2024 Года</span>
                    <span className={'three'}>Время</span>
                    <span className={'four'}>{time}</span>
                    <span className={'five'}>Место проведения</span>
                    <span className={'six'}>{place}</span>
                    <span className={'seven'}>Адрес</span>
                    <span className={'eight'}>{address}</span>
                </div>
            </div>
            <Image src={img} alt={'wedding'} className={s.section_img} width={578} height={562}/>
        </div>
    )
}