import Hero from "../components/hero";
import Heritage from "../components/hertiage";
import StorySection from "../components/collections";
import Process from "../components/process";
import GiftSection from "../components/process2";
import SpaceGallery from "../components/slider";
import Footer from "../components/footer";
import ContactSection from "../components/cta";

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