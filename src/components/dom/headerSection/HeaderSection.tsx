"use client";

// imports
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import adedayo from "../../../../public/assets/images/adedayo.webp";
import cx from "../../../utils";
import style from "./headerSectionStyle.module.scss";

interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
  const [seeFullImg, setSeeFullImg] = useState(false);
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
                priority
              />
            </div>

            <p>
              Adedayo is a Software Developer and Financial Trader from Lagos,
              Nigeria. Focused on building software solutions for entrepreneurs
              using modern technologies.
            </p>
          </div>
        </button>
      )}

      <nav ref={headerContainerRef} className={cx(style.headerContainer)}>
        <div className={cx(style.header, "mainContainer")}>
          <button type="button" className={style.myImgContainer}>
            <Image
              onClick={() => setSeeFullImg((prev) => !prev)}
              alt="Adedayo Aturu"
              src={adedayo}
              draggable={false}
              placeholder="blur"
              priority
            />
          </button>

          <button
            type="button"
            className="btn"
            onClick={() => window.scrollTo(0, document.body.scrollHeight)}
          >
            contact
          </button>
        </div>
      </nav>
    </>
  );
};

export default HeaderSection;
