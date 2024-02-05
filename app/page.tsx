import s from './page.module.css';
import MainSection from "@/app/Components/MainSection/MainSection";
import InvitationSection from "@/app/Components/InvitationSection/InvitationSection";
import ScheduleSection from "@/app/Components/ScheduleSection/ScheduleSection";
import ContactsSection from "@/app/Components/ContactsSection/ContactsSection";
import HeaderMenu from "@/app/Components/Header/Header";

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
