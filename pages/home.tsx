import Parallax from "../components/Parallax/Parallax";
import HomeFirst from "./Home/first_section/HomeFirst";
import HomeSecond from "./Home/second_section/HomeSecond";

const home = () => {
    return (
        <>
            <Parallax />
            <HomeFirst />
            <HomeSecond />
        </>
    );
};

export default home;
