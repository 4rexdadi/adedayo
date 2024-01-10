"use client";

/* eslint-disable react/button-has-type */

import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../../hooks/storeHook";
import { RefsSliceProps } from "../../../redux/features/refsSlice";
import cx from "../../../utils";
import CanvasElement from "../../canvas/CanvasElement";
import SpaceBoy from "../../canvas/experience/SpaceBoy";
import style from "./contactSectionStyle.module.scss";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = (): JSX.Element => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { spaceBoy } = useAppSelector(
    (state: { refsSlice: RefsSliceProps }) => state.refsSlice
  );

  // const camera = useThree((state) => state.camera);

  const handleSubmit = () => {};

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
        )
        .to(".contactMeContainer", {
          display: "grid",
          visibility: "visible",
          ease: "none",
          duration: 0.001,
        });

      return () => {
        tl.kill();
      };
    }

    return undefined;
  }, [spaceBoy]);

  useEffect(() => {
    const inputControls: HTMLElement | null =
      document.querySelector(".inputControls");

    const POINTER_SYNC = ({ x, y }: { x: number; y: number }) => {
      inputControls?.style.setProperty("--x", x.toFixed());
      inputControls?.style.setProperty("--y", y.toFixed());
    };

    document.body.addEventListener("pointermove", POINTER_SYNC);
  }, []);

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

      <div className={cx(style.contactMeContainer, "contactMeContainer")}>
        <div className={cx(style.contactMe, "contactMe")}>
          <p className={style.contactTitle}>Lets hear about your project</p>

          <form
            className={cx(style.inputControls, "inputControls")}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="name"
              name="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="name here..."
            />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email here..."
            />
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              spellCheck="false"
              name="textarea"
              id="textarea"
              value={message}
              placeholder="Type your message..."
            />
            <div className={cx("action")}>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

// const MIN = document.querySelector("#min");
// const MAX = document.querySelector("#max");
// const MAX_LABEL = document.querySelector("[for=max]");
// const MIN_LABEL = document.querySelector("[for=min]");

// const HORIZONTAL = document.querySelector("#horizontal");

// const CONSTRAIN = () => {
//   document.documentElement.style.setProperty("--min", MIN.value);
//   document.documentElement.style.setProperty("--max", MAX.value);
// };

// MIN.addEventListener("input", CONSTRAIN);
// MAX.addEventListener("input", CONSTRAIN);
// CONSTRAIN();

// const sharedProps = {
//   spellcheck: false,
//   name: "textarea",
//   id: "textarea",
//   placeholder: "Type your message...",
// };
// const SWITCH_MODE = () => {
//   console.info("coll");
//   const INPUT = document.querySelector("#textarea");
//   if (INPUT.tagName === "TEXTAREA") {
//     // Update the labels at this point too
//     MIN_LABEL.innerText = "min-width (ch)";
//     MAX_LABEL.innerText = "max-width (ch)";
//     MIN.setAttribute("min", 40);
//     MIN.setAttribute("max", 100);
//     MAX.setAttribute("min", 100);
//     MAX.setAttribute("max", 200);
//     INPUT.replaceWith(
//       Object.assign(document.createElement("input"), sharedProps)
//     );
//   } else {
//     // Update the labels at this point too
//     MIN_LABEL.innerText = "min-height (lh)";
//     MAX_LABEL.innerText = "max-height (lh)";
//     MIN.setAttribute("min", 1);
//     MIN.setAttribute("max", 10);
//     MAX.setAttribute("min", 5);
//     MAX.setAttribute("max", 20);
//     INPUT.replaceWith(
//       Object.assign(document.createElement("textarea"), sharedProps)
//     );
//   }
// };

// HORIZONTAL.addEventListener("change", SWITCH_MODE);

// const POINTER_SYNC = ({ x, y }) => {
//   document.documentElement.style.setProperty("--x", x);
//   document.documentElement.style.setProperty("--y", y);
// };
// document.body.addEventListener("pointermove", POINTER_SYNC);
