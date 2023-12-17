// import
import { FC } from "react";
import HeaderSection from "../components/dom/headerSection/HeaderSection";
import HeroSection from "../components/dom/heroSection/HeroSection";

const Home: FC = (): JSX.Element => {
  return (
    <div className="DomElement noSelect mainContainer" id="DomElement">
      <header id="header">
        <HeaderSection />
      </header>

      <main id="main">
        <HeroSection />
      </main>
    </div>
  );
};

export default Home;
