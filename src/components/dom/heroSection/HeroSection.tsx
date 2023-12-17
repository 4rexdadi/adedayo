// Imports
import { FC } from "react";
import style from "./heroSectionStyle.module.scss";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className={style.heroContainer}>
      <h1 className="heroHeader">
        <p className={style.heroRole}>
          <span>Adedayo</span>
          <span>Aturu</span>
        </p>

        <p className={style.heroAbout}>
          <span>
            from Lagos, Nigeria focused on creating and occasionally designing
            exceptional, bespoke,
          </span>
          <span>
            and engaging digital experiences for the web using modern
            technologies.
          </span>
          <span>
            <a href="google.com" target="_blank">
              get my resume
            </a>
          </span>
        </p>
      </h1>

      <div className={style.project}>
        <div style={{ background: "red" }} />
        <div style={{ background: "green" }} />
        <div style={{ background: "pink" }} />
        <div style={{ background: "blue" }} />
        <div style={{ background: "orange" }} />
      </div>
    </section>
  );
};

export default HeroSection;
