import s from './index.module.scss';
import {Layout} from 'antd';
import {HeaderComponent} from "@component/header/header-component";
import '../../app/components/second/style_ant.css'
import {MainSectionComponent} from "app/components/second/content/main-component";
import {ScheduleSectionComponent} from "@component/content/schedule-component";
import InviteComponent from "@component/content/invite-component";
import {SectionOneComponent} from "@component/content/section-one";
import {SectionTwoComponent} from "@component/content/section_two";
import {FooterComponent} from "app/components/second/footer/footer-component";

import './style.css'
import '../../app/globals.css'

const {Header, Footer, Content} = Layout;

export default function Invite() {
    return (
        <>
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
                <audio src='../../public/sound/pedro.mp3'/>
            </Layout>
        </>
    )
}
