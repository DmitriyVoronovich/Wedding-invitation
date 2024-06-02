import s from './index.module.scss';
import {Layout} from 'antd';
import '../../app/components/second-version/style_ant.css'
import './style.css'
import '../../app/globals.css'
import {
    FooterComponent,
    HeaderComponent,
    InviteComponent,
    MainSectionComponent,
    ScheduleSectionComponent,
    SectionOneComponent,
    SectionTwoComponent
} from "@components";

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
