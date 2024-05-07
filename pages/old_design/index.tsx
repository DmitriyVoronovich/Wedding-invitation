import s from './index.module.scss';
import HeaderMenu from "@/app/components/first/Header/Header";
import MainSection from "@/app/components/first/MainSection/MainSection";
import InvitationSection from "@/app/components/first/InvitationSection/InvitationSection";
import ContactsSection from "@/app/components/first/ContactsSection/ContactsSection";
import ScheduleSection from "@/app/components/first/ScheduleSection/ScheduleSection";
import '../../app/components/second/style_ant.css'


export default function OldHome() {
    return (
        <main className={s.main}>
            <HeaderMenu/>
            <MainSection/>
            <InvitationSection/>
            <ScheduleSection/>
            <ContactsSection/>
        </main>
    )
}
