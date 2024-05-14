import ContactUs from "../../ContactUs/ContactUs";
import Banner from "../Banner/Banner";
import RecentQuery from "../RecentQueries/RecentQuery";
import Slider from "../Slider/Slider";
import Team from "../Team/Team";

const Home = () => {
    
    return (
        <div className="block">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Slider></Slider>
            </div>
            <div className="mt-20">
                <RecentQuery></RecentQuery>
            </div>
            <div className="mt-20">
                <Team></Team>
            </div>
            <div className="mt-32 p-2 md:p-10 pt-9 md:pt-24 mx-2 md:mx-10 border-t-2 border-t-[#431A2033]">
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;