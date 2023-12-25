// Imports
import { FC } from "react";
import style from "./heroSectionStyle.module.scss";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className={style.heroContainer}>
      <h1 className="heroHeader">
        <p className={style.heroTitle}>
          <span>Adedayo</span>
          <span>Aturu</span>
        </p>

        <p className={style.heroAbout}>
          <span>
            A <span>software developer</span> from{" "}
            <a href="google.com">Lagos, Nigeria</a>, focused on creating and
            occasionally designing exceptional and engaging digital experiences.
            <br />
            Check out my <a href="google.com">résumé</a> for relevant
            experience.
          </span>

          <span>
            I don&#39;t identify myself with a specific technology; <br /> I use
            the best one for the job. <br /> Whether it&#39;s JavaScript,
            TypeScript, Python, or C#, <br />I adapt to the needs of the task at
            hand.
          </span>
        </p>
      </h1>
    </section>
  );
};

export default HeroSection;
