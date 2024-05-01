import React from 'react';
import s from './schedule-map.module.scss';

export const ScheduleMapComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.section_wrapper}>
                    <button className={s.description_button}>Опрос</button>
                    <div style={{position: 'relative', overflow: 'hidden', margin: '60px 0 0 0'}}><a
                        href="https://yandex.by/maps?utm_medium=mapframe&utm_source=maps"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Яндекс Карты</a><a
                        href="https://yandex.by/maps/geo/1907221441/?ll=24.758468%2C53.554237&tilt=0.8726646259971648&utm_medium=mapframe&utm_source=maps&z=13.08"
                        style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Деревня Долина
                        Заречная — Яндекс
                        Карты</a>
                        <iframe
                            src="https://yandex.by/map-widget/v1/?ll=24.758468%2C53.554237&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTA3MjIxNDQxEqsB0JHQtdC70LDRgNGD0YHRjCwg0JPRgNC-0LTQt9C10L3RgdC60LDRjyDQstC-0LHQu9Cw0YHRhtGMLCDQqNGH0YPRh9GL0L3RgdC60ZYg0YDQsNGR0L0sINCg0LDQttCw0L3QutCw0Z7RgdC60ZYg0YHQtdC70YzRgdCw0LLQtdGCLCDQstGR0YHQutCwINCU0LDQu9GW0L3QsCDQl9Cw0YDRjdGH0L3QsNGPIgoNeOjFQRWmMlZC&tilt=0.8726646259971648&z=13.08"
                            width="979" height="400" frameBorder="1" allowFullScreen={true}
                            style={{position: 'relative'}}></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};
