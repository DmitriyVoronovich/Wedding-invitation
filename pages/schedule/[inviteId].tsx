import s from './index.module.scss';
import {Layout} from 'antd';
import {HeaderComponent} from "@/app/components/second/header/header-component";
import '../../app/components/second/style_ant.css'
import {FooterComponent} from "app/components/second/footer/footer-component";
import './style.css'
import '../../app/globals.css'
import {getInvitePreloadOnServer} from "@/app/service/api/invitePreload.api";
import {ScheduleHeaderComponent} from "@/app/components/second/schedule_content/schedule-header";
import {ScheduleMainComponent} from "@/app/components/second/schedule_content/schedule-main";
import {InterrogationForm} from "@/app/components/second/interrogation-content/interrogation-form";
import {ScheduleMapComponent} from "@/app/components/second/schedule_content/schedule-map";

const {Header, Footer, Content} = Layout;

export async function getServerSideProps(context: any) {
    const inviteId = context.params?.inviteId;
    if (inviteId) {
        const inviteInfo = await getInvitePreloadOnServer(inviteId);

        return {
            props: {inviteInfo: inviteInfo || {}, inviteId: inviteId}
        }
    }

    return {
        props: {inviteInfo: {}}
    }
}

export default function Main({inviteInfo, inviteId}: any) {
    return (
        <>
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <ScheduleHeaderComponent/>
                    <ScheduleMainComponent/>
                    <ScheduleMapComponent/>
                    <InterrogationForm inviteInfo={inviteInfo} inviteId={inviteId}/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
