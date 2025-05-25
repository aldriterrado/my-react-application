import { HeroSection } from "../components/home/HeroSection";
import { AboutSection } from "../components/home/AboutSection";
import { Services } from "../components/home/Services";
import { FeaturedProjects } from "../components/home/FeaturedProject";
import { Sustainability } from "../components/home/Sustainability";

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <Services />
            <FeaturedProjects />
            <Sustainability />
        </div>
    );
}

export default Home;