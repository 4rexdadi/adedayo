// import
import { FC } from "react";
import ContactSection from "../components/dom/contactSection/ContactSection";
import ExperienceSection from "../components/dom/experienceSection/ExperienceSection";
import HeaderSection from "../components/dom/headerSection/HeaderSection";
import HeroSection from "../components/dom/heroSection/HeroSection";
import ProjectSection from "../components/dom/projectSection/ProjectSection";

const Home: FC = (): JSX.Element => {
  return (
    <div className="DomElement noSelect mainContainer" id="DomElement">
      <header id="header">
        <HeaderSection />
      </header>

      <main id="main">
        <HeroSection />

        <ProjectSection />

        <ExperienceSection />

        {/* <ServiceSection /> */}

        <ContactSection />
      </main>
    </div>
  );
};

export default Home;
