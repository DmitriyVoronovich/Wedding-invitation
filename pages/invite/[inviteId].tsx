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
import {AboutEventComponent} from "@/app/components/second/content/about-event-component";
import {ScheduleHeaderComponent} from "@/app/components/second/schedule_content/schedule-header";
import {RespMessage} from "@/app/components/second/respons-message";
import {InterrogationForm} from "@/app/components/second/interrogation-content/interrogation-form";
import {useState} from "react";
import {Fade} from "react-awesome-reveal";
const {Header, Footer, Content} = Layout;

export async function getServerSideProps(context: any) {
    const inviteId = context.params?.inviteId;
    if (inviteId) {
        const inviteInfo = await getInvitePreloadOnServer(inviteId);

        return {
            props: {inviteInfo: inviteInfo || {}, inviteId}
        }
    }

    return {
        props: {}
    }
}

export default function Invite({inviteInfo, inviteId}: any) {
    const [success, setSuccess] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    const onRespForm = (res: boolean) => {
        setShowMessage(true);
        setSuccess(res);

        setTimeout(() => {
            // location.reload()
            setShowMessage(false);
        }, 15500)
    };
    return (
        <>
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <MainSectionComponent inviteId={inviteId}/>
                    <InviteComponent inviteInfo={inviteInfo}/>
                    <SectionOneComponent/>
                    <AboutEventComponent/>
                    <ScheduleSectionComponent/>
                    <ScheduleHeaderComponent/>
                   <Fade triggerOnce={true} cascade={true} damping={0.3} direction={'up'} >
                    {showMessage ? <RespMessage ans={success}/> : <InterrogationForm inviteInfo={inviteInfo} inviteId={inviteId} onRespForm={onRespForm}/>}
                    </Fade>
                    <SectionTwoComponent/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
