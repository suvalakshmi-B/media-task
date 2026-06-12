import Hero from "../components/Hero";
import Heritage from "../components/Hertiage";
import StorySection from "../components/Collections";
import Process from "../components/Process";
import GiftSection from "../components/Process2";
import SpaceGallery from "../components/Slider";
import Footer from "../components/Footer";
import ContactSection from "../components/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Heritage/>
      <StorySection/>
      <Process/>
      <GiftSection/>
      <SpaceGallery/>
      <ContactSection/>
      <Footer/>
    </>
  );
}