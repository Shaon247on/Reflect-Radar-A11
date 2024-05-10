import Login from "../../Login/Login";
import Banner from "../Banner/Banner";
import Slider from "../Slider/Slider";

const Home = () => {
    return (
        <div className="block">
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Slider></Slider>
            </div>            
        </div>
    );
};

export default Home;