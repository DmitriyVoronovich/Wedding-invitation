import s from './index.module.css';
import HeaderMenu from "@/app/components/Header/Header";
import MainSection from "@/app/components/MainSection/MainSection";
import InvitationSection from "@/app/components/InvitationSection/InvitationSection";
import ContactsSection from "@/app/components/ContactsSection/ContactsSection";
import ScheduleSection from "@/app/components/ScheduleSection/ScheduleSection";


export default function Home() {
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
