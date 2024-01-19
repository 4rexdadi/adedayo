"use client";

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FC, useEffect } from "react";
import { useAppSelector } from "../../../hooks/storeHook";
import { RefsSliceProps } from "../../../redux/features/refsSlice";
import cx from "../../../utils";
import CanvasElement from "../../canvas/CanvasElement";
import SpaceBoy from "../../canvas/experience/SpaceBoy";
import ContactMe from "../../subComponent/contactMe/ContactMe";
import style from "./contactSectionStyle.module.scss";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = (): JSX.Element => {
  const { spaceBoy } = useAppSelector(
    (state: { refsSlice: RefsSliceProps }) => state.refsSlice
  );

  // const camera = useThree((state) => state.camera);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const width = document.querySelector(".moveText2")?.clientWidth;
    const containerWidth = document.querySelector(".whitePage")?.clientWidth;

    if (spaceBoy && width && containerWidth) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".contactContainer",
          pin: true,
          start: "top top",
          end: 10000,
          pinSpacing: true,
          // markers: true,
          scrub: 1,
        },
      });

      tl.to(".whitePage", {
        height: "auto",
        ease: "none",
        duration: 3,
      })
        .to(".moveText", {
          transform: "translateY(0)",
          ease: "none",
          duration: 3,
        })
        .to(
          ".moveText2",
          {
            x: -width + containerWidth,
            ease: "none",
            duration: 20,
          },
          "moveText2"
        )
        .to(
          ".fullWhitePage",
          {
            height: "100%",
            ease: "none",
            duration: 20,
          },
          "moveText2"
        )
        .to(
          ".textContainer",
          {
            transform: "translate3d(0px, 0px, 0px) scale(30)",
            ease: "none",
           duration: 10,
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
            duration: 10,
          },
          "changeColor"
        )
        .to(
          ".fullWhitePage",
          {
            backgroundColor: "black",
            ease: "none",
            duration: 10,
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
            duration: 10,
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
            duration: 10,
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
          <p className="moveText moveText2">
            Animation isn&apos;t just about looking cool - Good interaction
            design grounds an interface with a sense of space and logic.
          </p>
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

      <ContactMe />
    </section>
  );
};

export default ContactSection;
