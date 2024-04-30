import s from './index.module.scss';
import HeaderMenu from "@/app/components/first/Header/Header";
import MainSection from "@/app/components/first/MainSection/MainSection";
import InvitationSection from "@/app/components/first/InvitationSection/InvitationSection";
import ContactsSection from "@/app/components/first/ContactsSection/ContactsSection";
import ScheduleSection from "@/app/components/first/ScheduleSection/ScheduleSection";
import { Layout } from 'antd';
import {HeaderComponent} from "@/app/components/second/header/header-component";
import '../../app/components/second/style_ant.css'
import {MainSectionComponent} from "app/components/second/content/main-component";
import {ScheduleSectionComponent} from "@/app/components/second/content/schedule-component";
import InviteComponent from "@/app/components/second/content/invite-component";
import {SectionOneComponent} from "@/app/components/second/content/section-one";
import {SectionTwoComponent} from "@/app/components/second/content/section_two";
import {FooterComponent} from "@/app/components/second/content/footer-component";
const { Header, Footer, Content } = Layout;
import './style.css'


export default function Home() {
    return (
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <MainSectionComponent/>
                    <InviteComponent/>
                    <SectionOneComponent/>
                    <ScheduleSectionComponent/>
                    <SectionTwoComponent/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        // <main className={s.main}>
        //     <HeaderMenu/>
        //     <MainSection/>
        //     <InvitationSection/>
        //     <ScheduleSection/>
        //     <ContactsSection/>
        // </main>
    )
}
