import ContactImg from "../assets/footerimg.jpg";

export default function ContactSection() {
    return (
        <section className="bg-[#f5f1ef] py-24">

            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Side Form */}
                    <div>

                        <p className="text-5xl font-extralight text-[#222]">
                            Let's
                        </p>

                        <h2 className="text-7xl lg:text-[6rem] leading-none font-extralight text-[#222]">
                            Connect
                        </h2>

                        <p className="mt-6 text-gray-600 max-w-lg leading-8">
                            Looking for handcrafted Athangudi tiles for your home,
                            villa, resort, or commercial project? Send us a message
                            and we'll get back to you.
                        </p>

                        <form className="mt-12 space-y-6">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-lg"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-lg"
                            />

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border-b border-gray-300 bg-transparent py-4 outline-none text-lg"
                            />

                            <textarea
                                rows="4"
                                placeholder="Tell us about your project..."
                                className="w-full border-b border-gray-300 bg-transparent py-4 outline-none resize-none text-lg"
                            ></textarea>

                            <button
                                type="submit"
                                className="mt-4 px-10 py-4 rounded-full border border-gray-400 hover:bg-[#222] hover:text-white transition-all duration-500"
                            >
                                Send Enquiry
                            </button>

                        </form>

                    </div>

                    {/* Right Side Image */}
                    <div className="overflow-hidden">

                        <img
                            src={ContactImg}
                            alt="Athangudi Interior"
                            className="w-full h-[500px] lg:h-[750px] object-cover"
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}