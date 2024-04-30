import castel from "@/app/Accets/first/svgSchedule/Catholic_castel.svg";
import s from "@/app/components/first/ScheduleSection/ScheduleSection.module.css";
import buff from "@/app/Accets/first/svgSchedule/buffet.svg";
import banq from "@/app/Accets/first/svgSchedule/banquet.svg";
import second from "@/app/Accets/first/svgSchedule/second_day.svg";

export const MOBILE_MENU_BREAKPOINT = 768;

export const MENU_LIST = {
    main: {
        title: "Главное",
        href: 'main',
        offsetDesk: -30,
        offsetMob: -30
    },
    invitation: {
        title: "Приглашение",
        secondTitle: 'МЫ ЖЕНИМСЯ',
        href: 'invitation',
        offsetDesk: -125,
        offsetMob: -60

    },
    schedule: {
        title: "Расписание",
        secondTitle: 'СВАДЕБНЫЙ ДЕНЬ',
        href: 'schedule',
        offsetDesk: -115,
        offsetMob: -65
    },
    contacts: {
        title: "Контакты",
        secondTitle: 'КОНТАКТЫ',
        href: 'contacts',
        offsetDesk: -95,
        offsetMob: -55
    }
};

export const MENU_HEADER_LIST = [
    {
        title: "Главное",
        href: 'main',
        offsetDesk: -30,
        offsetMob: -30
    },
    {
        title: "Приглашение",
        secondTitle: 'МЫ ЖЕНИМСЯ',
        href: 'invitation',
        offsetDesk: -125,
        offsetMob: -60

    },
    {
        title: "Расписание",
        secondTitle: 'СВАДЕБНЫЙ ДЕНЬ',
        href: 'schedule',
        offsetDesk: -115,
        offsetMob: -65
    },
    {
        title: "Контакты",
        secondTitle: 'КОНТАКТЫ',
        href: 'contacts',
        offsetDesk: -95,
        offsetMob: -55
    }
];

export const EVENTS_LIST = [
    {
        id: 1,
        name: 'Венчание',
        place: 'Костел Святой Терезы',
        time: '15:00',
        image: castel,
        class: s.left,
        class2: ''
    },
    {
        id: 2,
        name: 'Фуршет',
        place: 'Усадьба Долина Заречная',
        time: '16:00',
        image: buff,
        class: s.right,
        class2: s.right_icon
    },
    {
        id: 3,
        name: 'Банкет',
        place: 'Усадьба Долина Заречная',
        time: '16:30',
        image: banq,
        class: s.left,
        class2: ''
    },
    {
        id: 4,
        name: '2-й день свадьбы',
        place: 'Усадьба Долина Заречная',
        time: '10:00',
        image: second,
        class: s.right,
        class2: s.right_icon
    }
];
