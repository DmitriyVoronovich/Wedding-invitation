import castel from "@/app/Accets/svgSchedule/Catholic_castel.svg";
import s from "@/app/components/ScheduleSection/ScheduleSection.module.css";
import buff from "@/app/Accets/svgSchedule/buffet.svg";
import banq from "@/app/Accets/svgSchedule/banquet.svg";
import second from "@/app/Accets/svgSchedule/second_day.svg";

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
