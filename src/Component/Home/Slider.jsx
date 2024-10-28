import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './swiper.css'

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <div className=''>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://wallpapercave.com/wp/wp3646146.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.ecogents.com/cdn/shop/articles/Retro_Revolutie_Hoe_Vintage_Trends_de_Herenmode_Beinvloeden.png?v=1705564787&width=1100" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://kudann.ru/uploads/971a29004c8424d9d61d3540deaaa7d6.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://i.pinimg.com/originals/7e/d0/7d/7ed07dd0533c0e6e1ae94b82f9c0e233.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://assets2.andaazfashion.com/media/images/home-page-creative/home-page-women-indo-western-banner-19092024.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://images2.alphacoders.com/998/998403.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://st2.depositphotos.com/1003368/9856/i/950/depositphotos_98563428-stock-photo-woman-in-blue-dress.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://c8.alamy.com/comp/B8RH51/a-sceptic-looking-modern-dressed-christian-woman-looking-at-muslim-B8RH51.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.vishalprints.in/cdn/shop/files/banner2_x800.webp?v=1681967139" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.latestkurtidesigns.com/wp-content/uploads/2021/09/designer-sarees-for-this-diwali-season.png" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://i.ytimg.com/vi/oFF1ypOkviQ/maxresdefault.jpg" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://www.vishalprints.in/cdn/shop/files/VISHAL_PRINTS_RAKHI_SALE_BANNER_x800.jpg?v=1722070510" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlYhY1XNJ0706HPauV0UwOb0n6ntwh5rWXJagWJ-9db0VPPfAswp0OAM0Mm4YDInrIEE&usqp=CAU" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://s3.ap-south-1.amazonaws.com/tcsonline-live/mgs_blog/b/e/best-silk-sarees-that-every-bride-must-have-in-her-wardrobe.png" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/4/AmazonStores/A21TJRUUN4KGV/cce2b5fc5c48707c10e92185ba595528.w1500.h750.jpg" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTduQuIG7N3umRg6WFCKMrIUuUz5_vTyA_kMnRO_rGpQNCA43Ko8FqeAdRlGTZGgiPhu-8&usqp=CAU" />
                    </SwiperSlide>
                  
                    <SwiperSlide>
                        <img className='w-full h-[250px] md:h-[550px]' src="https://i.pinimg.com/originals/9e/c5/cd/9ec5cdfe4d18f004394209d1fb0ddebb.jpg" />
                    </SwiperSlide>
                  
                   

                </div>
            </Swiper>
        </>
    );
}