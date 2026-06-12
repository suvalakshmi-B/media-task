import Logo from "../assets/Duree_Logo.jpg";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f5f1ef] text-[#222]">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4f0ed] via-[#f6f3ef] to-[#eef4e7]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Left */}
          <div>

            <h2 className="text-5xl lg:text-6xl font-extralight mb-8">
              Let's Talk
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              Looking for authentic Athangudi tiles for your
              home, villa, resort, or commercial project?
              Get in touch with our team.
            </p>

            <button className="px-10 py-4 rounded-full bg-white border border-gray-300 hover:bg-[#222] hover:text-white transition-all duration-500">
              Contact Us
            </button>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-3xl font-light mb-8">
              Company
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>About Us</li>
              <li>Collections</li>
              <li>Craft Process</li>
              <li>Gallery</li>
            </ul>

          </div>

          {/* Products */}
          <div>

            <h3 className="text-3xl font-light mb-8">
              Products
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>Floor Tiles</li>
              <li>Wall Tiles</li>
              <li>Custom Designs</li>
              <li>Interior Solutions</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-3xl font-light mb-8">
              Contact
            </h3>

            <ul className="space-y-4 text-gray-600 leading-8">
              <li>info@athanguditiles.com</li>
              <li>+91 98765 43210</li>
              <li>Karaikudi, Tamil Nadu</li>
              <li>India</li>
            </ul>

          </div>

        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gray-300"></div>

        {/* Bottom */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Logo */}
          <div>

            <img
              src={Logo}
              alt="Logo"
              className="h-16 object-contain"
            />

          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-center">
            © 2025 Athangudi Heritage Tiles.
            Crafted with tradition and timeless design.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">

            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>

          </div>

        </div>

      </div>

    </footer>
  );
}