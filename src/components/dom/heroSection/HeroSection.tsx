// Imports
import { FC } from "react";
import { LeftArrow, RightArrow } from "../../../../public/assets/svg/Svg";
import cx from "../../../utils";
import Dragger from "../../subComponent/dragger/Dragger";
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

      <div className={style.projectTitle}>
        <p>Selected works</p>

        <span>
          <LeftArrow className="" />
          <RightArrow className="" />
        </span>
      </div>

      <Dragger className={cx(style.projectContainer, "dragger")} friction={0.95}>
        <div className={style.project}>
          <div className={style.projectC} style={{ background: "red" }} />
          <div className={style.projectC} style={{ background: "green" }} />
          <div className={style.projectC} style={{ background: "pink" }} />
          <div className={style.projectC} style={{ background: "blue" }} />
          <div className={style.projectC} style={{ background: "orange" }} />
        </div>
      </Dragger>
    </section>
  );
};

export default HeroSection;
