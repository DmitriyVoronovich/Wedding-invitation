import s from './page.module.css';
import HeaderMenu from "@/app/Components/Header/Header";
import MainSection from "@/app/Components/MainSection/MainSection";
import InvitationSection from "@/app/Components/InvitationSection/InvitationSection";
import ScheduleSection from './Components/ScheduleSection/ScheduleSection';
import ContactsSection from "@/app/Components/ContactsSection/ContactsSection";


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
