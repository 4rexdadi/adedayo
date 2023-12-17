"use client";

// imports
import { FC, useEffect, useRef } from "react";
import cx from "../../../utils";
import style from "./headerSectionStyle.module.scss";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
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
    <nav
      ref={headerContainerRef}
      className={cx(style.headerContainer, "mainContainer")}
    >
      <h2>Adedayo</h2>

      <p>contact</p>
    </nav>
  );
};

export default HeaderSection;
