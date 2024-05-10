import { Link } from 'react-router-dom';
import bannerPhoto from '../../../assets/Banner4.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import 'animate.css';

const Banner = () => {
    return (
        <div className='relative flex justify-center mb-32 h-[675px]'>
            <img src={bannerPhoto} alt="" className='w-full absolute z-10'/>
            <div className='w-full h-[675px] absolute z-20 bg-gradient-to-b from-[#724F54]'></div>
            <div className='absolute z-20 top-20'>
                <h1 className='text-5xl font-playfair text-white text-center'>Empower Your Choices <br /> Crowdsource Product Insights & Solutions!</h1>
            </div>
            <div className='absolute z-20 w-[461px] top-[300px] left-[440px] h-[340px] bg-[#431A20] animate__animated animate__fadeInUp text-center p-11'>
                <h1 className='text-4xl text-white font-playfair'>Welcome to <br /> Reflect Radar</h1>
                <p className='text-white text-center mt-5'>Join our community to share product concerns, discover alternative solutions, and engage with fellow users for informed choices and better shopping experiences.</p>
                <div className='flex items-center justify-center gap-7 mt-5'>
                    <p className='text-white'>Explore More</p>
                    <Link><button className="btn btn-circle bg-[#CB2903] hover:bg-[#431A20] duration-300 border-none"><FaArrowRightLong className='text-white  text-xl'></FaArrowRightLong></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;