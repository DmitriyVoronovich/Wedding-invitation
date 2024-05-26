import s from './index.module.scss';
import {Layout} from 'antd';
import {HeaderComponent} from "@/app/components/second/header/header-component";
import '../../app/components/second/style_ant.css'
import {MainSectionComponent} from "app/components/second/content/main-component";
import {ScheduleSectionComponent} from "@/app/components/second/content/schedule-component";
import InviteComponent from "@/app/components/second/content/invite-component";
import {SectionOneComponent} from "@/app/components/second/content/section-one";
import {SectionTwoComponent} from "@/app/components/second/content/section_two";
import {FooterComponent} from "app/components/second/footer/footer-component";
import './style.css'
import '../../app/globals.css'
import {getInvitePreloadOnServer} from "@/app/service/api/invitePreload.api";

const {Header, Footer, Content} = Layout;

export async function getServerSideProps(context: any) {
    const inviteId = context.query?.inviteId;
    if (inviteId) {
        const inviteInfo = await getInvitePreloadOnServer(inviteId);

        return {
            props: {inviteInfo: inviteInfo || {}}
        }
    }

    return {
        props: {inviteInfo: {}}
    }
}

export default function Invite({inviteInfo}: any) {
    return (
        <>
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <MainSectionComponent/>
                    <InviteComponent inviteInfo={inviteInfo}/>
                    <SectionOneComponent/>
                    <ScheduleSectionComponent/>
                    <SectionTwoComponent/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
