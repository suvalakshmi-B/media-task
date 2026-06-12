import tileimg1 from "../assets/tile-final"
import tileimg2 from "../assets/footerimg"

export default function Heritage() {
    return (
        <section className="bg-[#F5F0EB] py-24 lg:py-40">

            <div className="mx-auto max-w-8xl px-6 lg:px-8">

                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Image */}
                    <div className="lg:translate-y-25">
                        <img
                            src={tileimg2}
                            alt="Athangudi Craftsmanship"
                            className="w-full h-[650px] object-cover"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="w-full">

                        {/* Small Image */}
                        <img
                            src={tileimg1}
                            alt="Athangudi Tiles"
                            className=" w-[460px]  h-[350px] object-cover mb-20"
                        />

                        {/* Heading */}
                        <h2 className="font-extralight leading-[0.9] text-[#1f1f1f]">
                            <span className="block text-5xl lg:text-6xl">
                                The    Art of
                            </span>
                            <span className="block text-6xl lg:text-6xl text-[#B98A49]">
                                Athangudi
                            </span>
                        </h2>

                        {/* Content */}
                        <div className="mt-12">

                            <p className="text-xl font-light mb-6 text-black">
                                01. Heritage
                            </p>

                            <p className=" text-gray-600 leading-6 text-base">
A tile crafted at Chettinad Tiles is a tile crafted with love, care and imagination. Using only natural pigments and materials of the highest quality, our stellar artisans use a pollution-free, traditional hand-pressed technique that is trusted for centuries to create tiles that are beautiful, durable and environmentally conscious.                            </p>

                            {/* Button */}
                            <button className="group mt-6 rounded-full border border-gray-400 px-8 py-4 transition-all duration-500 hover:bg-black hover:text-white">

                                <span className="tracking-wide">
                                    Discover More
                                </span>

                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}