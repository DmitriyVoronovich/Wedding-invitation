import s from './index.module.scss';
import {Layout} from 'antd';
import {HeaderComponent} from "@component/header/header-component";
import '../../app/components/second/style_ant.css'
import {MainSectionComponent} from "app/components/second/content/main-component";
import {ScheduleSectionComponent} from "@component/content/schedule-component";
import InviteComponent from "@component/content/invite-component";
import {SectionOneComponent} from "@component/content/section-one";
import {FooterComponent} from "app/components/second/footer/footer-component";
import './style.css'
import '../../app/globals.css'
import {getInvitePreloadOn} from "@/app/service/api/invitePreload.api";
import {AboutEventComponent} from "@component/content/about-event-component";
import {ScheduleHeaderComponent} from "@component/schedule_content/schedule-header";
import {FormComponentContent} from "@component/form-component-container";
import {useState} from "react";
import {isOneGuest} from "@admin-components";

const {Header, Footer, Content} = Layout;

export async function getServerSideProps(context: any) {
    const inviteId = context.params?.inviteId;
    if (inviteId) {
        const inviteInfo = await getInvitePreloadOn(inviteId, true);

        return {
            props: {serverInviteInfo: inviteInfo || {}, inviteId}
        }
    }

    return {
        props: {}
    }
}

export default function Invite({serverInviteInfo, inviteId}: any) {
    const [inviteInfo, setInviteInfo] = useState(serverInviteInfo);
    const singleGuest = isOneGuest(inviteInfo);

    const onInviteInfoUpdate = async () => {
        const updatedInviteInfo = await getInvitePreloadOn(inviteId, false);
        setInviteInfo(updatedInviteInfo);
    };

    return (
        <>
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <MainSectionComponent inviteId={inviteId}/>
                    <InviteComponent inviteInfo={inviteInfo} singleGuest={singleGuest}/>
                    <SectionOneComponent/>
                    <AboutEventComponent singleGuest={singleGuest}/>
                    <ScheduleSectionComponent/>
                    <ScheduleHeaderComponent/>
                    <FormComponentContent inviteInfo={inviteInfo} inviteId={inviteId} onInviteInfoUpdate={onInviteInfoUpdate} singleGuest={singleGuest}/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
