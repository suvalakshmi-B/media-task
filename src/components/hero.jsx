import Logo from "../assets/Duree_Logo.jpg";

export default function Hero() {
  return (
    <section className="relative h-[120vh] overflow-hidden ">

      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <iframe
          className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 scale-150"
          src="https://www.youtube.com/embed/TZu2u0cx75U?autoplay=1&mute=1&loop=1&playlist=TZu2u0cx75U&start=10&end=48&controls=0&showinfo=0&rel=0"
          title="Background Video"
          allow="autoplay"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* HEADER */}
      <header className="absolute top-0 left-0 z-50 w-full">

        <div className="flex items-center justify-between px-8 lg:px-16 py-2">

          {/* LOGO */}
          <img
            src={Logo}
            alt="Logo"
            className="h-16 object-contain"
          />

          {/* RIGHT */}
          <div className="flex items-center gap-8">

            <button
              className="
                rounded-full
                border
                border-white/60
                px-8
                py-3
                text-sm
                tracking-[2px]
                text-white
                transition
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              ENQUIRY
            </button>

            <div className="h-8 w-px bg-white/40"></div>

            <button className="group">
              <div className="flex flex-col gap-2">

                <span className="h-[1.5px] w-12 bg-white transition-all duration-300 group-hover:w-8"></span>

                <span className="h-[1.5px] w-12 bg-white transition-all duration-300 group-hover:w-16"></span>

              </div>
            </button>

          </div>

        </div>
  <div className="h-px w-full bg-white/30"></div>

      </header>


      {/* HERO CONTENT */}
     <div className="relative z-20 flex h-full items-center">

  <div className="mx-auto w-full max-w-7xl px-8 lg:px-16">

    <div className="max-w-4xl mx-auto ml-[15%] ">

      <h1
        className="
          text-white
          font-extralight
          leading-[0.85]
          tracking-[-4px]
        "
      >
        <span className="block text-7xl md:text-8xl lg:text-[6rem]">
          The
        </span>

        <span className="block text-7xl md:text-8xl lg:text-[6rem]">
          Heritage Crafted
        </span>

        <span className="block text-7xl md:text-8xl lg:text-[6rem]">
           In Stone
        </span>
      </h1>

      <p
        className="
          mt-8
          text-xl
          md:text-2xl
          text-white/90
        "
      >
        Authentic Athangudi tiles crafted for timeless interiors
      </p>

    </div>

  </div>

</div>
<div className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2">

  <button className="bubble-btn">
    EXPLORE
  </button>

</div>
    </section>
  );
}