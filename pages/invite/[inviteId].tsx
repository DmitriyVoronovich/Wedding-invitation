import s from './index.module.scss';
import {Layout} from 'antd';
import '../../app/components/second-version/style_ant.css'
import './style.css'
import '../../app/globals.css'
import {getInvitePreloadOn} from "@/app/service/api/invitePreload.api";
import {useState} from "react";
import {isOneGuest} from "@admin-components";
import {
    AboutEventComponent,
    FooterComponent,
    FormComponentContent,
    HeaderComponent,
    InviteComponent,
    MainSectionComponent,
    ScheduleHeaderComponent,
    ScheduleSectionComponent,
    SectionOneComponent
} from "@components";

const {Header, Footer, Content} = Layout;

export async function getServerSideProps(context: any) {
    const inviteId = context.params?.inviteId;
    if (inviteId) {
        const inviteInfo = await getInvitePreloadOn(inviteId, true);

        if (!inviteInfo) {
            return {
                redirect: {
                    destination: '/invite',
                    permanent: false,
                }
            }
        }

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
                    <FormComponentContent inviteInfo={inviteInfo} inviteId={inviteId}
                                          onInviteInfoUpdate={onInviteInfoUpdate} singleGuest={singleGuest}/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
