"use client"

import Image from "next/image";
import banner from '@/assets/banner.webp';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const Banner = () => {
    return (
        <section className="wrapper grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="col-span-2">
                <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <Image alt="" src={banner} className="w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="" src={banner} className="w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="" src={banner} className="w-full" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image alt="" src={banner} className="w-full" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="flex flex-row md:flex-col gap-3">
                <div className="w-full">
                    <Image alt="" src={banner} className="w-full" />
                </div>
                <div className="w-full">
                    <Image alt="" src={banner} className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default Banner;