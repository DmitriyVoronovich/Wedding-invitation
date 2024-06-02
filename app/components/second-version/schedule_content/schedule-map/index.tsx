import s from './schedule-map.module.scss';

export const ScheduleMapComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                    <div style={{position: 'relative', overflow: 'hidden', margin: '60px 0 0 0'}}><a
                        href="https://yandex.by/maps/org/kostyol_svyatoy_terezy_avilskoy/220166635454/?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Костёл святой Терезы
                        Авильской</a><a
                        href="https://yandex.by/maps/26834/shchuchyn/category/catholic_church/52986399301/?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Католический храм в
                        Щучине</a>
                        <iframe
                            src="https://yandex.by/map-widget/v1/?ll=24.741795%2C53.606309&mode=search&oid=220166635454&ol=biz&z=16.72"
                            width={"979"} height={"400"} frameBorder="1"
                            allowFullScreen={true}
                            className={s.map}
                            style={{position: 'relative'}}></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
