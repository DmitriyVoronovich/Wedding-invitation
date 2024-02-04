import React from 'react';
import s from '../headerStyle.module.css';

const data = [
    {
        title: "Main",
        href: '#Main'
    },
    {
        title: "Invitation",
        href: '#Invitation'

    },
    {
        title: "Schedule",
        href: '#Schedule'
    },
    {
        title: "Contacts",
        href: '#Contacts'
    }
]

const Menu = () => {
    return (
        <ul className={s.ling_container}>
            {data.map(item => {
                return (
                    <li key={item.title}>
                        <a className={s.link} href={item.href}>
                            {item.title}
                        </a>
                    </li>
                )
            })}
        </ul>
    );
};

export default Menu;