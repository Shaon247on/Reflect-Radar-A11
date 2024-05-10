import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';
//css file for swiper
import 'swiper/css';
import 'swiper/swiper-bundle.css';


import slide1 from '../../../assets/slider1.jpg';
import slide2 from '../../../assets/slider2.jpg';
import slide3 from '../../../assets/slider3.jpg';
import slide4 from '../../../assets/slider4.jpg';
import slide5 from '../../../assets/slider5.jpg';

const Slider = () => {

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            effect="fade"
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            navigation
            loop='true'
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8 border-4 border-red-700 w-full h-[650px]'>
                    <div className='absolute h-full inset-0 bg-cover bg-center' style={{backgroundImage:`url(${slide1})`}}/>
                    <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>
                    <div className='relative flex flex-col gap-3'>
                        <h1>Hello sujana</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8 border-4 border-red-700 w-full h-[650px]'>
                    <div className='absolute h-full inset-0 bg-cover bg-center' style={{backgroundImage:`url(${slide2})`}}/>
                    <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>
                    <div className='relative flex flex-col gap-3'>
                        <h1>Hello shaon</h1>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8 border-4 border-red-700 w-full h-[650px]'>
                    <div className='absolute h-full inset-0 bg-cover bg-center' style={{backgroundImage:`url(${slide3})`}}/>
                    <div className='absolute inset-0 bg-black opacity-10 group-hover:opacity-50'/>
                    <div className='relative flex flex-col gap-3'>
                        <h1>Hello sakib</h1>
                    </div>
                </div>
            </SwiperSlide>
            ...
        </Swiper>
    );
};

export default Slider;