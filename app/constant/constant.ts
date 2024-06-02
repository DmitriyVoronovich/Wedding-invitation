import castel from "@accets/first/svgSchedule/Catholic_castel.svg";
import buff from "@accets/first/svgSchedule/buffet.svg";
import banq from "@accets/first/svgSchedule/banquet.svg";
import second from "@accets/first/svgSchedule/second_day.svg";
import {SelectProps} from "antd/lib";

export const MOBILE_MENU_BREAKPOINT = 768;



export const MENU_HEADER_LIST = [
    {
        id: 1,
        title: "Главное",
        href: 'home',
        offsetDesk: -30,
        offsetMob: 0
    },
    {
        id: 2,
        title: "Приглашение",
        secondTitle: 'МЫ ЖЕНИМСЯ',
        href: 'invite',
        offsetDesk: -125,
        offsetMob: -750

    },
    {
        id: 3,
        title: "Расписание",
        secondTitle: 'СВАДЕБНЫЙ ДЕНЬ',
        href: 'schedule',
        offsetDesk: -115,
        offsetMob: -865
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
    },
    {
        id: 2,
        name: 'Фуршет',
        place: 'Усадьба Долина Заречная',
        time: '16:30',
        image: buff,
    },
    {
        id: 3,
        name: 'Банкет',
        place: 'Усадьба Долина Заречная',
        time: '17:00',
        image: banq,
    },
    {
        id: 4,
        name: '2-й день свадьбы',
        place: 'Усадьба Долина Заречная',
        time: '10:00',
        image: second,
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
        value: 'whiteWine',
    },
    {
        label: 'Красное вино',
        value: 'redWine',
    },
    {
        label: 'Водка',
        value: 'vodka',
    },
    {
        label: 'Коньяк',
        value: 'cognac',
    }];
