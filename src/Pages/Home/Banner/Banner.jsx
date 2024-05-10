import bannerPhoto from '../../../assets/Banner4.jpg';
import 'animate.css';

const Banner = () => {
    return (
        <div className='relative flex justify-center mb-32'>
            <img src={bannerPhoto} alt="" className='w-full absolute z-10'/>
            <div className='w-full h-[675px] absolute z-20 bg-gradient-to-b from-[#724F54]'></div>
            <div className='absolute z-20 top-16'>
                <h1 className='text-5xl font-playfair text-white text-center'>Empower Your Choices <br /> Crowdsource Product Insights & Solutions!</h1>
            </div>
            <div className='absolute z-20 w-[461px] top-[258px] left-[440px] h-[340px] bg-[#431A20] animate__animated animate__fadeInUp'>
            </div>
        </div>
    );
};

export default Banner;