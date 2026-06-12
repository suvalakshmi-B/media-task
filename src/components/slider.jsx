import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

import "swiper/css";

import img1 from "../assets/sliderimg1.jpg";
import img2 from "../assets/sliderimg5.jpg";
import img3 from "../assets/sliderimg3.jpg";
import img4 from "../assets/sliderimg4.jpg";

export default function SpaceGallery() {
    const [showCursor, setShowCursor] = useState(false);

    const [cursorPos, setCursorPos] = useState({
        x: 0,
        y: 0,
    });

    return (
        <section className="bg-[#f5f1ef] py-24 overflow-hidden">

            {/* Heading */}

            <div className="text-center mb-20">

                <p className="text-4xl md:text-5xl font-extralight text-[#222]">
                    The
                </p>

                <h2 className="text-[5rem] md:text-[7rem] lg:text-[9rem] leading-none font-extralight text-[#222]">
                    Space
                </h2>

                <p className="mt-4 text-lg text-gray-500">
                    Explore handcrafted interiors
                </p>

            </div>

            {/* Slider Area */}

            <div
                className="relative"
                onMouseEnter={() => setShowCursor(true)}
                onMouseLeave={() => setShowCursor(false)}
                onMouseMove={(e) =>
                    setCursorPos({
                        x: e.clientX,
                        y: e.clientY,
                    })
                }
            >

                {/* Floating Circle */}

                {showCursor && (
                    <motion.div
                        className="fixed z-[9999] pointer-events-none"
                        animate={{
                            x: cursorPos.x,
                            y: cursorPos.y,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 25,
                        }}
                    >
                        <div className="h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/60 backdrop-blur-xl border border-white/20 flex items-center justify-center">

                            <span className="text-white uppercase tracking-[0.3em] text-xs">
                                Swipe
                            </span>

                        </div>
                    </motion.div>
                )}

                {/* Swiper */}

                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={30}
                    grabCursor={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 2.2,
                        },
                        1024: {
                            slidesPerView: 2.8,
                        },
                    }}
                >

                    <SwiperSlide>
                        <img
                            src={img1}
                            alt=""
                            className="w-full h-[600px] object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={img2}
                            alt=""
                            className="w-full h-[450px] object-cover mt-32"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={img3}
                            alt=""
                            className="w-full h-[600px] object-cover"
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img
                            src={img4}
                            alt=""
                            className="w-full h-[450px] object-cover mt-32"
                        />
                    </SwiperSlide>

                </Swiper>

            </div>

        </section>
    );
}