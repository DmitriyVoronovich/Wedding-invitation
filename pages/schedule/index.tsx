import s from '../invite/index.module.scss';
import {Layout} from 'antd';
import {HeaderComponent} from "@/app/components/second/header/header-component";
import '../../app/components/second/style_ant.css'
import {FooterComponent} from "app/components/second/footer/footer-component";
import '../invite/style.css';
import '../../app/globals.css';
import {ScheduleHeaderComponent} from "app/components/second/schedule_content/schedule-header";
import {ScheduleMainComponent} from "app/components/second/schedule_content/schedule-main";
import {ScheduleMapComponent} from "@/app/components/second/schedule_content/schedule-map";

const {Header, Footer, Content} = Layout;


export default function Main() {

    return (
        <>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <ScheduleHeaderComponent/>
                    <ScheduleMainComponent/>
                    <ScheduleMapComponent/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}