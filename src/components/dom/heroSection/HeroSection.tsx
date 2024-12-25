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
            Experienced <span>Software Developer</span> from{" "}
            <a target="_black" href="https://g.co/kgs/QAiaiFz">
              Lagos, Nigeria
            </a>
            , skilled in building large-scale, object-oriented solutions with a
            focus on software design, implementation, and optimization.
          </span>

          <span>
            Proven track record of leading successful projects and improving
            system performance.
            <br />
            Check out my{" "}
            <a target="_black" href="/assets/resume.pdf">
              résumé
            </a>{" "}
            for relevant experience.
          </span>
        </p>
      </h1>
    </section>
  );
};

export default HeroSection;
