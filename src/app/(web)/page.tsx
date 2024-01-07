import Gallery from "@/components/Gallery";
import NewsLetter from "@/components/NewsLetter";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <FeaturedRoom/>
      <Gallery />
      <NewsLetter/>
    </>
  );
};

export default Home