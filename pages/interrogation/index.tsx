import {Layout} from "antd";
import s from "@pages/invite/index.module.scss";
import {HeaderComponent} from "@/app/components/second/header/header-component";
import {FooterComponent} from "@/app/components/second/footer/footer-component";
import {InterrogationForm} from "@/app/components/second/interrogation-content/interrogation-form";

const {Header, Footer, Content} = Layout;

export default function Home() {
    return (
        <>
            <Layout className={s.layout_style}>
                <Header className={s.header_style}><HeaderComponent/></Header>
                <Content className={s.content_style}>
                    <InterrogationForm/>
                </Content>
                <Footer className={s.footer_style}><FooterComponent/></Footer>
            </Layout>
        </>
    )
}
