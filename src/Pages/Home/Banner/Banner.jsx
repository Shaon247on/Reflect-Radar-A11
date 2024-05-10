import { Link } from 'react-router-dom';
import bannerPhoto from '../../../assets/Banner4.jpg';
import { FaArrowRightLong } from "react-icons/fa6";
import 'animate.css';

const Banner = () => {
    return (
        <div className='relative flex justify-center mb-20 h-[675px]'>
            <img src={bannerPhoto} alt="" className='w-full absolute z-10'/>
            <div className='w-full h-[188px] md:h-[385px] lg:h-[675px] absolute z-20 bg-gradient-to-b from-[#724F54]'></div>
            <div className='absolute z-20 top-8 md:top-20'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl font-playfair text-white text-center'>Empower Your Choices <br /> Crowdsource Product Insights & Solutions!</h1>
            </div>
            <div className='absolute z-20 w-[300px] md:w-[461px] top-[150px] md:top-[250px] lg:top-[300px] left-10 md:left-[160px] lg:left-[440px] h-[150px] md:h-[230px] lg:h-[340px] bg-[#431A20] animate__animated animate__fadeInUp text-center p-3 md:p-7 lg:p-11'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl text-white font-playfair w-full lg:w-[250px] mx-auto'>Welcome to Reflect Radar</h1>
                <p className='text-white text-center mt-2 md:mt-5 text-[10px] md:text-base'>Join our community to share product concerns, discover alternative solutions, and engage with fellow users for informed choices and better shopping experiences.</p>
                <div className='flex items-center justify-center gap-7 mt-2 lg:mt-5'>
                    <p className='text-white text-[14px] md:text-base'>Explore More</p>
                    <Link><button className="btn btn-circle bg-[#CB2903] btn-sm md:btn-md hover:bg-[#431A20] duration-300 border-none"><FaArrowRightLong className='text-white text-base md:text-xl'></FaArrowRightLong></button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;