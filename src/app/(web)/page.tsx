import Gallery from "@/components/Gallery";
import NewsLetter from "@/components/NewsLetter";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";

const Home = () => {
  return (
    <>
      <HeroSection />
      <PageSearch />
      <Gallery />
      <NewsLetter/>
    </>
  );
};

export default Home