import React from 'react';
import s from './footer-component.module.scss';
import '@pages/invite/style.css'
import {MENU_HEADER_LIST} from "@/app/constant/constant";
import Link from "next/link";

export const FooterComponent = () => {
    return (
        <section className={s.section_container}>
            <div className={s.container}>
                <div className={s.contact_wrapper}>
                    <h3 className={s.contact_title}>Свяжитесь с нами</h3>
                    <h4 className={s.contact_title}>Алина: +375-29-887-3817</h4>
                    <h4 className={s.contact_title}>Павел: +375-29-149-939</h4>
                </div>
                <div className={s.footer_menu_wrapper}>
                    {MENU_HEADER_LIST.map((item) => {
                        return (
                            <Link href={`/${item.href}`} key={item.id} className={s.menu_link}>
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