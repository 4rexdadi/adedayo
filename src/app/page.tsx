// import
import { FC, Suspense } from "react";
import dynamic from "next/dynamic"
// import ContactSection from "../components/dom/contactSection/ContactSection";
// import ExperienceSection from "../components/dom/experienceSection/ExperienceSection";
import HeaderSection from "../components/dom/headerSection/HeaderSection";
// import HeroSection from "../components/dom/heroSection/HeroSection";
// import ProjectSection from "../components/dom/projectSection/ProjectSection";
// import ServicesSection from "../components/dom/servicesSection/ServicesSection";

const Home: FC = (): JSX.Element => {
const ContactSection = dynamic(
  () => import("../components/dom/contactSection/ContactSection")
);

const ExperienceSection = dynamic(
  () => import("../components/dom/experienceSection/ExperienceSection")
);

const ProjectSection = dynamic(
  () => import("../components/dom/projectSection/ProjectSection")
);

const ServicesSection = dynamic(
  () => import("../components/dom/servicesSection/ServicesSection")
);

const HeroSection = dynamic(
  () => import("../components/dom/heroSection/HeroSection")
);

  return (
    <div className="DomElement noSelect mainContainer" id="DomElement">
      <header id="header">
        <HeaderSection />
      </header>

      <Suspense fallback={null}>
      <main id="main">
        <HeroSection />

        <ProjectSection />

        <ExperienceSection />

        <ServicesSection />

        <ContactSection />
      </main>
      </Suspense>
    </div>
  );
};

export default Home;
