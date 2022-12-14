import Parallax from "../components/Parallax/Parallax";
import HomeFirst from "./Home/first_section/HomeFirst";
import HomeSecond from "./Home/second_section/HomeSecond";
import Banner from "./Home/banner/Banner";
import HomeThird from "./Home/third_section/HomeThird";
import Footer from "../components/Footer/Footer";

const home = () => {
    return (
        <>
            <Parallax />
            <HomeFirst />
            <HomeSecond />
            <Banner />
            <HomeThird />
            <Footer />
        </>
    );
};

export default home;
