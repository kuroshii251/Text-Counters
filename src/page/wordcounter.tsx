import WordCounter from "../components/countertools/wordcounter/main";
import Footer from "../components/layouts/footer/main";
import Navbars from "../components/layouts/navbar/main";

export default function WordCounterPage(){
    return (
        <>
        <Navbars/>
        <WordCounter/>
        <Footer/>
        </>
    )
}