import React from 'react';
import {MENU_HEADER_LIST} from "@/app/constant/constant";
import s from './header-component.module.scss'
import Link from "next/link";

export const HeaderComponent = () => {
    return (
        <section className={s.header_container}>
            <div className={s.container}>
                <div className={s.header_logo}>А&П</div>
                <div className={s.header_menu_wrapper}>
                    {MENU_HEADER_LIST.map((item) => {
                        return (
                            <Link href={`/${item.href}`} key={item.href} className={s.menu_link}>
                            <span>
                                {item.title}
                            </span>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};