"use client";

import { FC, useEffect, useState } from "react";
import { ArrowDown } from "../../../../public/assets/svg/Svg";
import style from "./keepScrollingStyle.module.scss";

interface KeepScrollingProps {}

const KeepScrolling: FC<KeepScrollingProps> = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const { scrollY } = window;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    const scrollPer = (scrollY / scrollHeight) * 100;

    setScrollPercent(scrollPer);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const r = 15;
  const circ = 2 * Math.PI * r;

  return (
    <div className={style.keepScrollingContainer}>
      <svg height="40" width="40">
        <circle
          cy="20"
          cx="20"
          r={r}
          fill="transparent"
          strokeDasharray={circ}
          strokeDashoffset={((100 - scrollPercent) * circ) / 100}
          strokeWidth="3"
        />
      </svg>

      {scrollPercent > 94 && (
        <button type="button" onClick={() => window.scrollTo(0, 0)}>
          <ArrowDown className="" />
        </button>
      )}
    </div>
  );
};

export default KeepScrolling;
