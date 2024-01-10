import SectionRight from "@/app/Components/SectionThree/sectionRight/SectionRight";
import SectionLeft from "@/app/Components/SectionThree/sectionLeft/SectionLeft";
import s from './sectionThree.module.css';
import wed from '../../Accets/wedding.png';
import res from '../../Accets/reception.png';
import cer from '../../Accets/ceremony.png';
import ban from '../../Accets/banquet.png';
import sec from '../../Accets/secondday.png';

export default function SectionThree() {
    return (
        <section className={s.section_container}>
            <h2 className={s.section_title}>ПРОГРАММА МЕРОПРИЯТИЯ</h2>
            <SectionRight title={'ВЕНЧАНИЕ'}
                          secondTitle={'WEDDING'}
                          time={'13:30 - 14:30'}
                          place={'Костел св. Терезы '}
                          address={'ул. Советская 1, Щучин'}
                          img={wed}/>
            <SectionLeft title={'ФУРШЕТ'}
                         secondTitle={'RECEPTION'}
                         time={'15:00 - 15:30 '}
                         place={'Усадьба Долина Заречная'}
                         address={'д. Долина Заречная 2'}
                         img={res}/>
            <SectionRight title={'ЦЕРЕМОНИЯ'}
                          secondTitle={'CEREMONY'}
                          time={'15:30 - 16:00 '}
                          place={'Усадьба Долина Заречная'}
                          address={'д. Долина Заречная 2'}
                          img={cer}/>
            <SectionLeft title={'БАНКЕТ'}
                         secondTitle={'BANQUET'}
                         time={'16:00 - 23:00 '}
                         place={'Усадьба Долина Заречная'}
                         address={'д. Долина Заречная 2'}
                         img={ban}/>
            <SectionRight title={'2 - Й ДЕНЬ'}
                          secondTitle={'SECOND DAY'}
                          time={'11:00 - 20:00 '}
                          place={'Усадьба Долина Заречная'}
                          address={'д. Долина Заречная 2'}
                          img={sec}/>
        </section>
    )
}