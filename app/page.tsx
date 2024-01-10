import s from './page.module.css';
import SectionOne from "@/app/Components/SectionOne/SectionOne";
import SectionTwo from "@/app/Components/SectionTwo/SectionTwo";
import SectionThree from "@/app/Components/SectionThree/SectionThree";
import SectionFour from "@/app/Components/SectionFour/SectionFour";

export default function Home() {
    return (
        <main className={s.main}>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
        </main>
    )
}
