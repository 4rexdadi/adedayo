import { FC } from "react";
import AnimationSvg from "../../../../public/assets/svg/Animations";
import DevelopmentSvg from "../../../../public/assets/svg/Developer";
import cx from "../../../utils";
import style from "./servicesSectionStyle.module.scss";

interface ServicesSectionProps {}

const ServicesSection: FC<ServicesSectionProps> = (): JSX.Element => {
  return (
    <section className={style.serviceContainer}>
      <h3 className={style.serviceHeader}>Let&apos;s work together</h3>

      <p className={style.serviceIntro}>
        Each project is unique, and my pragmatic approach ensures the delivery
        of accessible and optimized work. <br /> As a dedicated software
        developer passionate about creating interactive digital experiences,
        here&apos;s how I can contribute to your business growth:
      </p>

      <div className={style.serviceDetailsContainer}>
        <div className={style.serviceDetails}>
          <p className={style.serviceDetailsHeader}>Considered development.</p>

          <p>
            <span>Project Scoping & Data Visualization: </span> Prioritize and
            define core features based on user needs to enhance your web
            application&apos;s functionality. Create compelling and easily
            understandable data visualizations that tell a captivating story.
          </p>

          <p>
            <span>Engineering & Debugging: </span> Address technical queries,
            debug codebase, and optimize on web best practices, including
            performance, SEO and accessibility.
          </p>
        </div>

        <div className={style.serviceDetailsSvg}>
          <DevelopmentSvg className="developmentSvg" />
        </div>
      </div>

      <div className={cx(style.serviceDetailsContainer, style.reverse)}>
        <div className={style.serviceDetails}>
          <p className={style.serviceDetailsHeader}>Code Choreography.</p>

          <p>
            <span>Creating User Experience: </span> I pay attention to the
            little details that bring a design to life. Whether it&apos;s
            full-on WebGL(2D or 3D Interactions), UI interactions, or
            animations.
          </p>

          <p>
            I combine nuanced timing and motion with a deep understanding of
            browser rendering to deliver logical interactions that are both full
            of character and outrageously smooth to your users.
          </p>
        </div>

        <div className={style.serviceDetailsSvg}>
          <AnimationSvg className="animationSvg" />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

// Animation isn’t just about looking cool - Good interaction design grounds an interface with a sense of space and logic.

// Available for freelance software development

// [Animations end here => Contact popUp]

// With experience building complex interfaces means that I'm happy to deliver anything from single-page apps to scalable design systems.

// If this sounds like something you're interested in,
