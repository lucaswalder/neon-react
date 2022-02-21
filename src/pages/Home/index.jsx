import Footer from "../../components/Footer";
import Menu from '../../components/Menu/Menu'
import AppSection from "./appSection";
import ContaDigital from "./contaDigitalSection";
import Depoimentos from "./depoSection";
import HeroSection from "./heroSection";

export default function Home() {

    return (
        <>
        <Menu/>
        <HeroSection/>
        <AppSection/>
        <Depoimentos/>
        <ContaDigital/>
        <Footer/>
        </>
    );
}