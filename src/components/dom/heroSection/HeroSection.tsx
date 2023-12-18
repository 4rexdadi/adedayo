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
            a software developer from Lagos, Nigeria focused on creating and occasionally designing
            exceptional, and engaging digital experiences.
          </span>
          <span>I don't identify myself with a specific technology; I use the best one for the job. Whether it's JavaScript, TypeScript, Python, or C#, I adapt to the needs of the task at hand.</span>
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
