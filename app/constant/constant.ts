import castel from "@/app/Accets/first/svgSchedule/Catholic_castel.svg";
import s from "@/app/components/first/ScheduleSection/ScheduleSection.module.css";
import buff from "@/app/Accets/first/svgSchedule/buffet.svg";
import banq from "@/app/Accets/first/svgSchedule/banquet.svg";
import second from "@/app/Accets/first/svgSchedule/second_day.svg";
import {SelectProps} from "antd/lib";

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
        id: 1,
        title: "Главное",
        href: 'invite',
        offsetDesk: -30,
        offsetMob: -30
    },
    {
        id: 2,
        title: "Приглашение",
        secondTitle: 'МЫ ЖЕНИМСЯ',
        href: 'schedule',
        offsetDesk: -125,
        offsetMob: -60

    },
    {
        id: 3,
        title: "Расписание",
        secondTitle: 'СВАДЕБНЫЙ ДЕНЬ',
        href: 'schedule',
        offsetDesk: -115,
        offsetMob: -65
    },
    {
        id: 4,
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

export const SCHEDULE_LIST = [
    {
        id: 1,
        name: 'Венчание',
        place: 'Костел Святой Терезы',
        time: '15:00 - 16:00',
        interval: '1 час',
    },
    {
        id: 2,
        name: 'Фуршет',
        place: 'Усадьба Долина Заречная',
        time: '16:00 - 16:30',
        interval: '30 минут',
    },
    {
        id: 3,
        name: 'Банкет',
        place: 'Усадьба Долина Заречная',
        time: '16:30 - 00:00',
        interval: '7 часов 30 минут',
    },
    {
        id: 4,
        name: '2-й день свадьбы',
        place: 'Усадьба Долина Заречная',
        time: '10:00 - 20:00',
        interval: '10 часов',
    }
];

export const alcoholicDrinks: SelectProps['options'] = [
    {
        label: 'Белое вино',
        value: 'White_wine',
    },
    {
        label: 'Красное вино',
        value: 'Red_wine',
    },
    {
        label: 'Водка',
        value: 'Vodka',
    },
    {
        label: 'Коньяк',
        value: 'Cognac',
    }];