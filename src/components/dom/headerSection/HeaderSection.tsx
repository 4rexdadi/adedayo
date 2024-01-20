"use client";

// imports
import { FC, useEffect, useRef } from "react";
import Lenis from '@studio-freight/lenis'
import cx from "../../../utils";
import style from "./headerSectionStyle.module.scss";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
  const headerContainerRef = useRef<HTMLElement>(null);
  const lenis = new Lenis()

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
    <nav ref={headerContainerRef} className={cx(style.headerContainer)}>
      <div className={cx(style.header, "mainContainer")}>
        <h2>
          <span>Software</span>
          <br />
          <span>Dev</span>
        </h2>

        <button type="button" className="btn" onClick={() => lenis.scrollTo("contactMeContainer")}>
          contact
        </button>
      </div>
    </nav>
  );
};

export default HeaderSection;
