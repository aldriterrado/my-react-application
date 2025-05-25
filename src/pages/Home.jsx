import { HeroSection } from "../components/home/HeroSection";
import { AboutSection } from "../components/home/AboutSection";
import { Services } from "../components/home/Services";
import { FeaturedProjects } from "../components/home/FeaturedProject";

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <Services />
            <FeaturedProjects />
        </div>
    );
}

export default Home;