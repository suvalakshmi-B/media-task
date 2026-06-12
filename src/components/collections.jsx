import { useRef, useState, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TileBg from "../assets/tile-bg.jpg";

gsap.registerPlugin(ScrollTrigger);

const sections = [
    {
        title: "01. Preparing the Mold",
        description:
            "Artisans carefully place a handcrafted metal stencil inside a mold, creating the intricate patterns that make each Athangudi tile unique.",
    },
    {
        title: "02. Pouring Natural Pigments",
        description:
            "Vibrant mineral pigments are poured by hand into the patterned mold, bringing traditional designs to life with rich and lasting colors.",
    },
    {
        title: "03. Cement Layering",
        description:
            "A blend of cement and fine materials is layered behind the colored surface, giving strength, durability, and a smooth finish.",
    },
    {
        title: "04. Curing & Finishing",
        description:
            "The tiles are carefully cured, polished, and finished by hand before being ready to transform homes with timeless Chettinad elegance.",
    },
];

export default function StorySection() {
    const sectionRef = useRef(null);
    const [active, setActive] = useState(0);

    useLayoutEffect(() => {
        const trigger = ScrollTrigger.create({
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: true,

            onUpdate: (self) => {
                const progress = self.progress;

                if (progress < 0.25) {
                    setActive(0);
                } else if (progress < 0.5) {
                    setActive(1);
                } else if (progress < 0.75) {
                    setActive(2);
                } else {
                    setActive(3);
                }
            },
        });

        return () => {
            trigger.kill();
        };
    }, []);

   return (
  <div className="relative text-white">

    {/* ONE COMMON BACKGROUND */}
    <div className="fixed inset-0 -z-10">

      <img
        src={TileBg}
        alt=""
        className="h-full w-full object-cover scale-110 blur-[8px]"
      />

      <div className="absolute inset-0 bg-black/60"></div>

    </div>

   

    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >

      <div className="relative z-10 mx-auto grid h-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-20 px-8 lg:px-16">

        {/* LEFT */}
        <div className="flex items-center">

          <div>

            <h2 className="text-3xl leading-none font-extralight">
              Crafted<br></br> <span className="text-6xl lg:text-[5rem]">By Hand,</span> 
            </h2>

           

            <p className="mt-8 max-w-md text-white/70 leading-6">
              From natural pigments to handcrafted perfection,
              every Athangudi tile is created using traditional
              techniques passed down through generations.
            </p>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex items-center">

          <AnimatePresence mode="wait">

            <motion.div
              key={active}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >

              <h3 className="mb-8 text-4xl lg:text-5xl font-extralight">
                {sections[active].title}
              </h3>

              <p className="text-xl leading-8 text-white/80">
                {sections[active].description}
              </p>

            </motion.div>

          </AnimatePresence>

        </div>

      </div>

      {/* Dots */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 z-20">

        <div className="flex flex-col gap-8">

          {sections.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full border border-white transition-all duration-500 ${
                active === index
                  ? "bg-white scale-125"
                  : "bg-transparent"
              }`}
            />
          ))}

        </div>

      </div>

    </section>

  

    <section className="relative min-h-screen mt-20">

      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <h2 className="text-6xl md:text-8xl lg:text-[5rem] font-extralight leading-20">
          Bring Heritage
          <br />
          <span className="text-[#c89b5b]">
            Into Your Space
          </span>
        </h2>

        <p className="mt-8 max-w-3xl text-lg md:text-xl text-white/70 leading-9">
          Transform your interiors with authentic Athangudi tiles,
          where timeless craftsmanship meets modern design.
          Explore handcrafted collections inspired by the rich
          heritage of Chettinad and create spaces that tell a story.
        </p>

        <button className="group relative mt-16 flex h-24 w-24 items-center justify-center rounded-full border border-white/30 transition-all duration-500 hover:scale-110">

          <span className="absolute inset-0 rounded-full border border-white/20 animate-ping"></span>

          <span className="relative z-10 uppercase tracking-[0.2em] text-sm">
            Explore
          </span>

        </button>

      </div>

    </section>

  </div>
);
}