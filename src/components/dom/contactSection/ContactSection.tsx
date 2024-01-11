"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/storeHook";
import { RefsSliceProps } from "../../../redux/features/refsSlice";
import cx from "../../../utils";
import CanvasElement from "../../canvas/CanvasElement";
import SpaceBoy from "../../canvas/experience/SpaceBoy";
import style from "./contactSectionStyle.module.scss";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = (): JSX.Element => {
  const { spaceBoy } = useAppSelector(
    (state: { refsSlice: RefsSliceProps }) => state.refsSlice
  );

  // const camera = useThree((state) => state.camera);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (spaceBoy) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contactContainer",
          pin: true,
          start: "top top",
          end: 5000,
          pinSpacing: true,
          // markers: true,
          scrub: 1,
        },
      });

      tl.to(".whitePage", {
        height: "auto",
        ease: "none",
      })
        .to(".moveText", {
          transform: "translateY(0)",
          ease: "none",
        })
        .to(".fullWhitePage", {
          height: "100%",
          ease: "none",
        })
        .to(
          ".textContainer",
          {
            transform: "translate3d(0px, 0px, 0px) scale(30)",
            ease: "none",
          },
          "changeColor"
        )
        .to(
          ".whitePage",
          {
            backgroundColor: "black",
            color: "black",
            opacity: 0,
            ease: "none",
          },
          "changeColor"
        )
        .to(
          ".fullWhitePage",
          {
            backgroundColor: "black",
            ease: "none",
          },
          "changeColor"
        )
        .to(
          ".textContainer",
          {
            display: "none",
            visibility: "hidden",
            ease: "none",
          },
          "spaceBoy"
        )
        .to(
          spaceBoy.position,
          {
            x: 5.29,
            y: 2.021000000000006,
            z: -15,
            ease: "none",
          },
          "spaceBoy"
        )
        .to(
          spaceBoy.rotation,
          {
            x: 0,
            y: -1,
            z: 0,
            ease: "none",
          },
          "spaceBoy"
        );

      return () => {
        tl.kill();
      };
    }

    return undefined;
  }, [spaceBoy]);

  return (
    <section className={cx(style.contactContainer, "contactContainer")}>
      <div className={cx(style.textContainer, "textContainer")}>
        <div className={cx(style.blackPage, "blackPage")}>
          <p className="moveText">Available for</p>
        </div>
        <div className={cx(style.whitePage, "whitePage")}>
          <p className="moveText">freelance</p>
        </div>
        <div className={cx(style.blackPage, "blackPage")}>
          <p className="moveText">work!</p>
        </div>
        <span className={cx(style.fullWhitePage, "fullWhitePage")} />
      </div>

      <CanvasElement
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 5],
          rotation: [0, 0, 0],
        }}
      >
        <SpaceBoy />
      </CanvasElement>
    </section>
  );
};

export default ContactSection;
