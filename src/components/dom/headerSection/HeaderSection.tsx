"use client";

// imports
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { InlineWidget } from "react-calendly";
import adedayo from "../../../../public/assets/images/adedayo.webp";
import cx from "../../../utils";
import style from "./headerSectionStyle.module.scss";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
  const [seeFullImg, setSeeFullImg] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const headerContainerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let oldScrollY = window.scrollY;

    const scrolling = () => {
      if (!headerContainerRef.current) return;

      if (oldScrollY < window.scrollY) {
        headerContainerRef.current.style.transform = "translateY(-130px)";
      } else {
        headerContainerRef.current.style.transform = "translateY(0px)";
      }

      oldScrollY = window.scrollY;
    };

    window.addEventListener("scroll", scrolling);

    return () => {
      window.removeEventListener("scroll", scrolling);
    };
  }, []);

  return (
    <>
      {seeFullImg && (
        <button
          type="button"
          onClick={() => setSeeFullImg(false)}
          className={style.myInfoContainer}
        >
          <div className={style.myInfo}>
            <div>
              <Image
                alt="Adedayo Aturu"
                src={adedayo}
                draggable={false}
                placeholder="blur"
                sizes="40vw"
              />
            </div>

            <p>
              I&#39;m on a mission to turbocharge the product I&#39;m working
              on, making it lightning-fast and super easy to use. Picture this:
              micro-animations sprinkled throughout, interactions that feel like
              a dance with physics, and a whole lot of fun packed into every
              click and swipe. It&#39;s not just about accessibility; it&#39;s
              about turning every user experience into a delightful adventure!
            </p>
          </div>
        </button>
      )}

      {showCalendly && (
        <div className={style.calendlyOverlay}>
          <button
            className={`${style.closeButton} btn`}
            onClick={() => setShowCalendly(false)}
            type="button"
            title="close calendly"
          >
            Close
          </button>

          <div className={style.calendlyContainer}>
            <InlineWidget
              styles={{
                width: "100%",
                height: "100%",
              }}
              url="https://calendly.com/adedayoaturu/30min"
            />
          </div>
        </div>
      )}

      <nav ref={headerContainerRef} className={cx(style.headerContainer)}>
        <div className={cx(style.header, "mainContainer")}>
          <button title="Logo" type="button" className={style.myImgContainer}>
            <Image
              onClick={() => setSeeFullImg((prev) => !prev)}
              alt="Adedayo Aturu"
              src={adedayo}
              draggable={false}
              placeholder="blur"
              sizes="15vw"
            />
          </button>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              type="button"
              className="btn"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
            >
              Send Message
            </button>

            <button
              type="button"
              className="btn"
              onClick={() => setShowCalendly((prev) => !prev)}
            >
              Book a Call
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderSection;
