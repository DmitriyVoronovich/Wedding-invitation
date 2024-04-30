'use client'

import React, {useEffect, useState} from 'react';
import styles from './headerStyle.module.css';
import { Link as ScrollLink } from 'react-scroll'
import {MENU_LIST, MOBILE_MENU_BREAKPOINT} from "@/app/constant/constant";

export default function HeaderMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = React.useState(0);

    useEffect(() => window.addEventListener('scroll', () => setShowMenu(window.scrollY > 400)));

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    });

    return (
        <nav className={`${styles.navbar} ${showMenu ? styles.showMenu : styles.scrolled }`}>
            <div className={`${styles.menu} ${isMenuOpen && styles.showMenu}`}>
                <ul>
                    {Object.values(MENU_LIST).map(item => (
                        <li key={item.title}>
                            <ScrollLink
                                className={styles.link}
                                activeClass={styles.active}
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={width <= MOBILE_MENU_BREAKPOINT ? item.offsetMob :  item.offsetDesk}
                                duration={500}
                                onClick={closeMenu}
                            >
                                {item.title}
                            </ScrollLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
}
