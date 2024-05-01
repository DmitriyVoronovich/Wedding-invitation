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
import Head from "next/head";
import '../../app/globals.css'

const {Header, Footer, Content} = Layout;


const PageLayout = ({children}: any) => {
    return (
        <html lang="en">
        <Head>
            <title>Приглашение</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
                rel="stylesheet"/>
            <style jsx global>{`
                body {
                    margin: 0;
                }
            `}</style>
        </Head>
        <body>{children}</body>
        </html>
    )
}

export default function Home() {
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
                    <MainSectionComponent/>
                    <InviteComponent/>
                    <SectionOneComponent/>
                    <ScheduleSectionComponent/>
                    <SectionTwoComponent/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
