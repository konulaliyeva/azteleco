import AboutSection from "@/ui/containers/About";
import ServiceSection from "@/ui/containers/ServiceSection";
import SwiperComponent from "@/ui/components/Swiper";
import NewsSection from "@/ui/containers/NewsSection";
import HeroSection from "@/ui/containers/HeroSection";

const Home = () => {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <SwiperComponent />
      {/* <NewsSection /> */}
    </div>
  );
};

export default Home;
