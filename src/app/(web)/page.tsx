import Gallery from "@/components/Gallery/Gallery";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import HeroSection from "@/components/HeroSection/HeroSection";
import PageSearch from "@/components/PageSearch/PageSearch";
import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {
    const featuredRoom = await getFeaturedRoom()
    // console.log(featuredRoom)
    // throw new Error("unbinf error")
    return (

        <>
            <HeroSection />
            <PageSearch />
            <FeaturedRoom featuredRoom={featuredRoom} />
            <Gallery />
            <NewsLetter />
        </>
    );
};

export default Home
// 01822859970