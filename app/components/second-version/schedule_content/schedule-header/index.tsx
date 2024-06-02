import Image from "next/image";
import fon from '@accets/images/CHEM9353_resized.jpeg';
import s from './schedule-header.module.scss'
import {Fade} from "react-awesome-reveal";

export const ScheduleHeaderComponent = () => (
    <section className={s.section_container}>
        <div className={s.container}>
            <div className={s.section_wrapper}>
                <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} className={s.fade_image}>
                    <Image src={fon} alt={'mare'} className={s.image}/>
                </Fade>
                <div className={s.phrase_wrapper}>
                    <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'}>
                        <p className={s.phrase_text}>
                            “Для мира ты всего лишь один человек, но для одного человека ты - весь мир”.
                        </p>
                        <span className={s.phrase_author}>Неизвестный</span>
                    </Fade>
                </div>
            </div>
        </div>
    </section>
);
