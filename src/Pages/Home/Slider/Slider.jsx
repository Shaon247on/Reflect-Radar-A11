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
        <div>
            <div className='text-center mb-10'>
                <h1 className='text-3xl md:text-5xl font-bold font-playfair mb-5'>Why Choose Us</h1>
                <p className=''>Discover superior solutions effortlessly. Expert advice, community support, and satisfaction guaranteed.</p>
            </div>
            <div>
                <Swiper
                    modules={[Navigation, Scrollbar, A11y, EffectFade]}
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
                        <div className='flex flex-col gap-4 group relative text-white rounded-xl px-6 py-8  w-full h-[300px] md:h-[650px]'>
                            <div className='absolute h-full inset-0 bg-cover bg-center w-[90%] mx-auto rounded-xl' style={{ backgroundImage: `url(${slide1})` }} />
                            <div className='absolute inset-0 bg-gradient-to-r from-black rounded-xl opacity-10 w-[90%] mx-auto group-hover:opacity-50 duration-300' />
                            <div className='relative flex flex-col gap-3 justify-center'>
                                <div className='absolute top-6 md:top-48 left-3 md:left-20 w-[300px] md:w-[500px]'>
                                    <h1 className='text-2xl md:text-5xl font-bold font-playfair mb-4'>See the difference? <br />Find better alternatives.</h1>
                                    <p>Quickly discern between product quality. Effortlessly discover superior alternatives by comparing damaged goods to pristine options side by side.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8  w-full h-[300px] md:h-[650px]'>
                            <div className='absolute h-full inset-0 bg-cover bg-center w-[90%] mx-auto rounded-xl' style={{ backgroundImage: `url(${slide2})` }} />
                            <div className='absolute inset-0 bg-gradient-to-r from-black rounded-xl opacity-10 w-[90%] mx-auto group-hover:opacity-50 duration-300' />
                            <div className='relative flex flex-col gap-3 justify-center'>
                                <div className='absolute top-6 md:top-48 left-3 md:left-20 w-[300px] md:w-[500px]'>
                                    <h1 className='text-2xl md:text-5xl font-bold font-playfair mb-4'>Join a vibrant community of problem-solvers. Your next solution is just a click away.</h1>
                                    <p>Collaborate with a diverse community. Access solutions and support from a vibrant network of problem-solvers, just a click away.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8 w-full h-[300px] md:h-[650px]'>
                            <div className='absolute h-full inset-0 bg-cover bg-center w-[90%] mx-auto rounded-xl' style={{ backgroundImage: `url(${slide3})` }} />
                            <div className='absolute inset-0 bg-gradient-to-r from-black rounded-xl opacity-10 w-[90%] mx-auto group-hover:opacity-50 duration-300' />
                            <div className='relative flex flex-col gap-3 justify-center'>
                                <div className='absolute top-6 md:top-48 left-3 md:left-20 w-[300px] md:w-[500px]'>
                                    <h1 className='text-2xl md:text-5xl font-bold font-playfair mb-4'>Trust the experts. Our platform curates the best advice tailored just for you.</h1>
                                    <p>Tap into expert insights. Benefit from curated advice tailored to your needs, sourced from verified experts in the field.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8  w-full h-[300px] md:h-[650px]'>
                            <div className='absolute h-full inset-0 bg-cover bg-center w-[90%] mx-auto rounded-xl' style={{ backgroundImage: `url(${slide4})` }} />
                            <div className='absolute inset-0 bg-gradient-to-r from-black rounded-xl opacity-10 w-[90%] mx-auto group-hover:opacity-50 duration-300' />
                            <div className='relative flex flex-col gap-3 justify-center'>
                                <div className='absolute top-6 md:top-48 left-3 md:left-20 w-[300px] md:w-[500px]'>
                                    <h1 className='text-2xl md:text-5xl font-bold font-playfair mb-4'>Navigate effortlessly. Our user-friendly interface makes finding solutions a breeze.</h1>
                                    <p> Intuitive navigation made simple. Seamlessly browse solutions on our platform with our user-friendly interface across multiple devices.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex flex-col gap-4 group relative shadow-lg text-white rounded-lg px-6 py-8  w-full h-[300px] md:h-[650px]'>
                            <div className='absolute h-full inset-0 bg-cover bg-center w-[90%] mx-auto rounded-xl' style={{ backgroundImage: `url(${slide5})` }} />
                            <div className='absolute inset-0 bg-gradient-to-r from-black rounded-xl opacity-10 w-[90%] mx-auto group-hover:opacity-50 duration-300' />
                            <div className='relative flex flex-col gap-3 justify-center'>
                                <div className='absolute top-6 md:top-48 left-3 md:left-20 w-[300px] md:w-[500px]'>
                                    <h1 className='text-2xl md:text-5xl font-bold font-playfair mb-4'>Satisfaction guaranteed. Find peace of mind with our reliable recommendations.</h1>
                                    <p>Confidence in your choices. Experience peace of mind with our reliable recommendations, ensuring satisfaction with every purchase.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    ...
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;