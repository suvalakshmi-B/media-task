export default function Process() {
  return (
    <>
      

   <section className="bg-[#f5f1ef] py-24">

  <div className="max-w-7xl mx-auto px-8 lg:px-16">

    {/* Top Content */}
    <div className=" items-start">

      {/* Left */}
      <div>

        

        <h2 className="text-7xl lg:text-[6rem] leading-none font-extralight text-[#222]">
           The Craft
        </h2>

        <h3 className="mt-8 text-3xl lg:text-4xl text-[#333]">
          02. Timeless Craftsmanship
        </h3>

      </div>

      {/* Right */}
      <div className="grid md:grid-cols-2 gap-12 max-w-xl pt-10">

        <p className="text-lg leading-6 text-gray-600">
          Athangudi tiles are handcrafted using traditional
          Chettinad techniques, preserving a legacy of artistry
          passed down through generations.
        </p>

        <p className="text-lg leading-6 text-gray-600">
          Every tile is individually created with natural pigments
          and intricate patterns, bringing timeless beauty into
          contemporary interiors.
        </p>

      </div>

    </div>

    {/* Images */}
    <div className="grid lg:grid-cols-2 gap-50 mt-24 items-center">

      <div className="overflow-hidden rounded-sm">

        <img
          src="src\assets\img2.jpg"
          alt="Athangudi Tile Making"
          className="w-[455] h-[628px] object-cover transition duration-700 hover:scale-105"
        />

      </div>

      <div className="overflow-hidden rounded-sm">

        <img
          src="src\assets\img1.jpg"
          alt="Athangudi Interior"
          className="w-[681px] h-[769px] object-cover transition duration-700 hover:scale-105"
        />

      </div>

    </div>

  </div>

</section>
    </>
  );
}