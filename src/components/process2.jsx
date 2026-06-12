import tileInterior from "../assets/tile3.jpg";
export default function GiftSection() {
    return (
        <section className="bg-[#f5f1ef] py-16 lg:py-24">

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Image */}
                    <div className="overflow-hidden">

                        <img
                            src={tileInterior}
                            alt="Athangudi Craftsmanship"
                            className="max-w-[584px] h-[424pxpx]  object-cover"
                        />

                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center">

                        <p className="text-4xl md:text-5xl font-extralight text-[#222]">
                            The
                        </p>

                        <h2 className="text-[4rem] md:text-[5rem] lg:text-[8rem] leading-none font-extralight text-[#222]">
                            Detail
                        </h2>

                        <h3 className="mt-8 text-2xl md:text-4xl text-[#222] font-light">
                            03. The Beauty of Craft
                        </h3>

                        <p className="mt-8 text-gray-700 text-lg leading-9 max-w-xl">
                            Every Athangudi tile is handcrafted with precision,
                            blending traditional techniques with artistic detail.
                            From vibrant natural pigments to intricate patterns,
                            each piece reflects the timeless heritage of Chettinad.
                        </p>

                        <button className="mt-10 w-fit px-10 py-4 border border-gray-400 rounded-full text-lg transition-all duration-500 hover:bg-[#222] hover:text-white">
                            Discover More
                        </button>

                    </div>

                </div>

            </div>

        </section>
    );
}