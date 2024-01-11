"use client";

// imports
import { FC, useEffect, useRef } from "react";
import { useAppDispatch } from "../../../hooks/storeHook";
import { setShowContactPopup } from "../../../redux/features/contactSlice";
import cx from "../../../utils";
import style from "./headerSectionStyle.module.scss";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
  const headerContainerRef = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();

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

        <button
          type="button"
          className="btn"
          onClick={() => dispatch(setShowContactPopup(true))}
        >
          contact
        </button>
      </div>
    </nav>
  );
};

export default HeaderSection;
