import castel from "@/app/Accets/Catholic_castel.png";
import s from "@/app/Components/ScheduleSection/ScheduleSection.module.css";
import buff from "@/app/Accets/buffet.png";
import banq from "@/app/Accets/banquet.png";
import second from "@/app/Accets/second_day.png";

export const MOBILE_MENU_BREAKPOINT = 768;

export const MENU_ITEM = {
    MAIN: {
        id: 'main',
        title: 'Главная'
    },
    INVITATION: {
        id: 'invitation',
        title: 'Приглашение'
    },
    SCHEDULE: {
        id: 'schedule',
        title: 'Расписание'
    },
    CONTACTS: {
        id: 'contacts',
        title: 'Контакты'
    }
};

export const MENU_LIST = [
    {
        title: "Главное",
        href: 'main',
        offsetDesk: -30,
        offsetMob: -30
    },
    {
        title: "Приглашение",
        href: 'invitation',
        offsetDesk: -110,
        offsetMob: -60

    },
    {
        title: "Расписание",
        href: 'schedule',
        offsetDesk: -100,
        offsetMob: -65
    },
    {
        title: "Контакты",
        href: 'contacts',
        offsetDesk: -80,
        offsetMob: -55
    }
];

export const EVENTS_LIST = [
    {
        id: 1,
        name: 'ВЕНЧАНИЕ',
        place: 'Костел Святой Терезы',
        time: '15:00',
        image: castel,
        class: s.left,
        class2: ''
    },
    {
        id: 2,
        name: 'ФУРШЕТ',
        place: 'Усадьба Долина Заречная',
        time: '16:00',
        image: buff,
        class: s.right,
        class2: s.right_icon
    },
    {
        id: 3,
        name: 'БАНКЕТ',
        place: 'Усадьба Долина Заречная',
        time: '16:30',
        image: banq,
        class: s.left,
        class2: ''
    },
    {
        id: 4,
        name: '2 - Й ДЕНЬ',
        place: 'Усадьба Долина Заречная',
        time: '10:00',
        image: second,
        class: s.right,
        class2: s.right_icon
    }
];