'use client'

import React, {useState} from 'react';
import styles from './headerStyle.module.css';
import { Link as ScrollLink } from 'react-scroll'

const data = [
    {
        title: "Главное",
        href: 'Main',
        offset: -30
    },
    {
        title: "Приглашение",
        href: 'Invitation',
        offset: -100

    },
    {
        title: "Расписание",
        href: 'Schedule',
        offset: -90
    },
    {
        title: "Контакты",
        href: 'Contacts',
        offset: -70
    }
]

export default function HeaderMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={styles.navbar}>

            <div className={`${styles.menu} ${isMenuOpen ? styles.showMenu : ''}`}>
                <ul>
                    {data.map(item => {
                        return (
                            <li key={item.title} >
                                <ScrollLink
                                    className={styles.link}
                                    activeClass="active"
                                    to={item.href}
                                    spy={true}
                                    smooth={true}
                                    offset={item.offset}
                                    duration={500}
                                    onClick={closeMenu}
                                >
                                    {item.title}
                                </ScrollLink>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={styles.menuIcon} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    );
};

