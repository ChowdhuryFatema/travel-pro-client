
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import TypeWriter from './TypeWriter';

const Banner = () => {
    return (
        <div className='mb-20'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='order-2 md:order-1'>
                    <Swiper

                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='slide1 w-full min-h-[90vh]'>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide2 w-full min-h-[90vh]'>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide3 w-full min-h-[90vh]'>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='slide4 w-full min-h-[90vh]'>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <div className='banner banner-overlay relative order-1 md:order-2'>
                    <div className='flex items-center h-[90vh]'>
                        <div className='w-4/5 mx-auto z-40 relative space-y-3'>
                            <h2 className='text-white font-bold text-5xl md:text-6xl  lg:text-8xl'>
                                <span className='text-[#FF4838]'> <TypeWriter></TypeWriter></span>
                            </h2>

                            <p className='text-white opacity-70'>
                                Embark on unforgettable journeys and explore the world wonders with Wanderlust Travel pro. From hidden gems to iconic landmarks, your next adventure awaits
                            </p>
                            <div className='pt-5'>
                                <button className="btn rounded-none hover:border-[#FF4838] border-[#FF4838] bg-transparent btn-overlay btn-overlay hover:bg-transparent relative text-[#FF4838] text-lg hover:text-white duration-500">
                                    <span className="z-30">
                                        Take A Tour
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;