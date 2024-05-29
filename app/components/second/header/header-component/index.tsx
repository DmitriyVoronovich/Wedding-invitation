import React, {useEffect, useState} from 'react';
import {MENU_HEADER_LIST} from "@/app/constant/constant";
import s from './header-component.module.scss'

import {CloseOutlined} from "@ant-design/icons";
import {Link} from "react-scroll";

export const HeaderComponent = () => {
    const [width, setWidth] = React.useState<number>();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);
        handleWindowResize()

        return () => window.removeEventListener('resize', handleWindowResize);
    });

    const onMenuToggle = () => {
        setOpen(!open)
    }

    return (
        <section className={s.header_container} id={'home'}>
            <div className={s.container}>

                {open
                    ? <div className={s.burger_menu_wrapper}>
                        <CloseOutlined className={s.close_icon} onClick={onMenuToggle}/>
                        {MENU_HEADER_LIST.map((item) => {
                            return (
                                <Link to={item.href}
                                      smooth={true}
                                      spy={true}
                                      key={item.id}
                                      className={s.menu_link}
                                      offset={item.offsetMob}
                                      onClick={onMenuToggle}>
                            <span>
                                {item.title}
                            </span>
                                </Link>
                            )
                        })}
                    </div>
                    : <>
                        <Link to={`invite`} smooth={true} spy={true} className={s.menu_link}>
                            <div className={s.header_logo}>А&П</div>
                        </Link>
                        {width < 768
                            ? <div className={s.burger_menu} onClick={onMenuToggle}>
                                <span className={s.burger_item}></span>
                                <span className={s.burger_item}></span>
                                <span className={s.burger_item}></span>
                            </div>
                            : <div className={s.header_menu_wrapper}>
                                {MENU_HEADER_LIST.map((item) => {
                                    return (
                                        <Link to={item.href}
                                              smooth={true}
                                              spy={true}
                                              key={item.id}
                                              className={s.menu_link}>
                            <span>
                                {item.title}
                            </span>
                                        </Link>
                                    )
                                })}
                            </div>}
                    </>}
            </div>
        </section>
    )
        ;
};