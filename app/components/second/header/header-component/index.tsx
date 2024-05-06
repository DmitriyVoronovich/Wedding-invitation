import React, {useEffect} from 'react';
import {MENU_HEADER_LIST} from "@/app/constant/constant";
import s from './header-component.module.scss'
import Link from "next/link";

export const HeaderComponent = () => {
    const [width, setWidth] = React.useState(0);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    });

    return (
        <section className={s.header_container}>
            <div className={s.container}>
                <Link href={`/invite`} className={s.menu_link}>
                    <div className={s.header_logo}>А&П</div>
                </Link>
                {width < 768
                    ? <div className={s.burger_menu}>
                        <span className={s.burger_item}></span>
                        <span className={s.burger_item}></span>
                        <span className={s.burger_item}></span>
                    </div>
                    : <div className={s.header_menu_wrapper}>
                        {MENU_HEADER_LIST.map((item) => {
                            return (
                                <Link href={`/${item.href}`} key={item.id} className={s.menu_link}>
                            <span>
                                {item.title}
                            </span>
                                </Link>
                            )
                        })}
                    </div>}
            </div>
        </section>
    );
};