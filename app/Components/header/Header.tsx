'use client'

import React, {useEffect, useState} from 'react';
import styles from './headerStyle.module.css';
import { Link as ScrollLink } from 'react-scroll'

const data = [
    {
        title: "Главное",
        href: 'Main',
        offsetDesk: -30,
        offsetMob: -30
    },
    {
        title: "Приглашение",
        href: 'Invitation',
        offsetDesk: -110,
        offsetMob: -60

    },
    {
        title: "Расписание",
        href: 'Schedule',
        offsetDesk: -100,
        offsetMob: -65
    },
    {
        title: "Контакты",
        href: 'Contacts',
        offsetDesk: -80,
        offsetMob: -55
    }
]

export default function HeaderMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [width, setWidth] = React.useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowMenu(true)
            } else {
                setShowMenu(false)
            }
        })
    }, [])

    const breakpoint = 768;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <nav className={`${styles.navbar} ${showMenu ? styles.showMenu : styles.scrolled }`}>
            <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul>
                    {data.map(item => (
                        <li key={item.title}>
                            <ScrollLink
                                className={styles.link}
                                activeClass="active"
                                to={item.href}
                                spy={true}
                                smooth={true}
                                offset={width <= breakpoint ? item.offsetMob : item.offsetDesk}
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
