"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { FC, useEffect } from "react";
import cx from "../../../utils";
import style from "./serviceSectionStyle.module.scss";

interface ServiceSectionProps {}

const ServiceSection: FC<ServiceSectionProps> = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".serviceContainer",
        start: "top top",
        end: "2500px",
        markers: true,
        scrub: 1,
        pin: true,
        pinSpacing: true,
      },
    });

    tl.to(".serviceCard", {
      translateY: "-25%",
      rotateZ: "-10deg",
      ease: "none",
    })
      .to(".serviceCard", {
        translateX: "70%",
        rotateZ: "0",
        scale: "2",
        ease: "none",
      })
      .to(".serviceCard", {
        scale: "2",
        translateX: "0%",
        ease: "none",
      })
      .to(".serviceCard", {
        scale: "2",
        translateX: "-70%",
        ease: "none",
      })
      .to(".serviceCard", {
        scale: "0",
        translateX: "0%",
        translateY: "0%",
        ease: "none",
      });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className={cx(style.serviceContainer, "serviceContainer")}>
      <div className={cx(style.serviceCard, "serviceCard")}>
        <div className={style.serviceTop}>
          <p>services</p>
        </div>

        <div className={style.serviceBottom}>
          <div>frontend</div>
          <div>backend</div>
          <div>frontend</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
