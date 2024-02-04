import Image from "next/image";
import s from './sectionFour.module.css'
import img from "@/app/Accets/image1.png";
import svg from '../../Accets/heard.png';
import inst from '../../Accets/in.png';
import tel from '../../Accets/tel.png';

export default function SectionFour() {
    return (
        <section className={s.section_container} id={'Contacts'}>
            <h2 className={s.section_title}>КОНТАКТЫ</h2>
            <span className={s.section_second_title}>КОНТАКТЫ</span>
            <div className={s.section_wrapper}>
                <div className={s.img_container}>
                    <Image src={img} alt={'img'} className={s.one_img}/>
                </div>
                <div className={s.text_container}>
                    <h4 className={s.section_text}>МЫ ВАС ОЧЕНЬ ЖДЁМ И БУДЕМ СЧАСТЛИВЫ ВИДЕТЬ НА НАШЕЙ СВАДЬБЕ!</h4>
                    <p className={s.section_description}>И надеемся, что этот волшебный день надолго останется у вас в памяти.</p>
                    <Image src={svg} alt={'svg'} className={s.section_svg}/>
                    <p className={s.section_description}>Если у вас возникнут вопросы, позвоните или напишите нам: </p>
                    <div>
                        <div className={s.contact_container}>
                            <span className={s.contact_name}>Павел:</span>
                            <span className={s.contact_number}>+375 29 149 93 59</span>
                            <a href={'https://www.instagram.com/'}>
                                <Image src={inst} alt={'instagram'} className={s.contact_inst_link}/>
                            </a>
                            <a href={'https://web.telegram.org/'}>
                                <Image src={tel} alt={'telegram'} className={s.contact_tel_link}/>
                            </a>
                        </div>
                        <div className={s.contact_container}>
                            <span className={s.contact_name}>Алина:</span>
                            <span className={s.contact_number}>+375 29 887 38 17</span>
                            <a href={'https://www.instagram.com/'}>
                                <Image src={inst} alt={'instagram'} className={s.contact_inst_link}/>
                            </a>
                            <a href={'https://web.telegram.org/'}>
                                <Image src={tel} alt={'telegram'} className={s.contact_tel_link}/>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}