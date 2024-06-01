import s from './index.module.scss';
import {Layout} from 'antd';
import '../../app/components/second-version/style_ant.css'
import {MainSectionComponent} from "app/components/second-version/content/main-component";
import {FooterComponent} from "app/components/second-version/footer/footer-component";
import './style.css'
import '../../app/globals.css'
import {HeaderComponent, ScheduleSectionComponent, SectionOneComponent, SectionTwoComponent} from "@components";
import InviteComponent from "@/app/components/second-version/content/invite-component";

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
