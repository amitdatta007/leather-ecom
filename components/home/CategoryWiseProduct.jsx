"use client"

import Image from "next/image";
import Blender from '@/assets/blender.png';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef, useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "../products/ProductCard";

const CategoryWiseProduct = () => {

    const [isBeginning, setIsBeginning] = useState(true);
        const [isEnd, setIsEnd] = useState(false);
    
    
        const slider = useRef(null);
    
        const handleNext = () => {
            if (slider.current && slider.current.swiper) {
                slider.current.swiper.slideNext();
            }
        };
    
        const handlePrev = () => {
            if (slider.current && slider.current.swiper) {
                slider.current.swiper.slidePrev();
            }
        };

    return (
        <div className="flex w-full flex-col md:flex-row gap-14 md:gap-6">
            <div className="w-full md:w-[25%] bg-red-400">
                <Image alt="" src={Blender} className="w-full h-full object-cover"  />
            </div>
            <div className="w-full md:w-[75%]">
                <div className="flex flex-col gap-2 relative">
                    <div className="flex justify-between items-center absolute -top-10 right-0">

                        <div className="flex">
                            <button onClick={handlePrev} disabled={isBeginning} className={isBeginning ? "opacity-50" : ""}>
                                <ChevronLeft strokeWidth={1} size={32} />
                            </button>
                            <button onClick={handleNext} disabled={isEnd} className={isEnd ? "opacity-50" : ""}>
                                <ChevronRight strokeWidth={1} size={32} />
                            </button>
                        </div>
                    </div>
                    <div>
                        <Swiper
                            className="cat-slider"
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            navigation
                            pagination={{
                                clickable: true,
                                renderBullet: (index, className) => {
                                    return `<span className="${className} custom-dot"></span>`;
                                }
                            }}
                            breakpoints={{
                                0: { slidesPerView: 2 },
                                640: { slidesPerView: 3 },
                                860: { slidesPerView: 4 },
                                1024: { slidesPerView: 5 },
                            }}
                            ref={slider}
                            onInit={(swiper) => {
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            }}
                            onSlideChange={(swiper) => {
                                setIsBeginning(swiper.isBeginning);
                                setIsEnd(swiper.isEnd);
                            }}
                        >
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                            <SwiperSlide>
                                <ProductCard />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CategoryWiseProduct;