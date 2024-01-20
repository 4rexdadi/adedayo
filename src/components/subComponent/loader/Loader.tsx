"use client";

// import
import { useProgress } from "@react-three/drei";
import { CSSPlugin, Expo, gsap } from "gsap";
import { FC, useEffect, useState } from "react";
import style from "./loaderStyle.module.scss";

gsap.registerPlugin(CSSPlugin);

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  const { progress } = useProgress();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // reveal function to animate and reveal page using gsap timeline
  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });
    t1.to(".follow", {
      x: 0,
      duration: 2,
      ease: Expo.easeInOut,
    })
      .to(".hide", { opacity: 0, duration: 0.01 }, "hide")
      .to(".follow", {
        height: "100%",
        ease: Expo.easeInOut,
      })
      .to(".contentDisplay", {
        x: 0,
        ease: Expo.easeInOut,
        duration: 1.5,
      })
      .to(".follow", {
        opacity: 0,
        duration: 0.01,
      })
      .to(".contentDisplay", {
        opacity: 0,
        duration: 0.01,
      });
  };

  useEffect(() => {
    if (progress === 100) reveal();
  }, [progress]);

  return isLoading === false ? null : (
    <div className={`${style.loaderContainer} loaderContainer`}>
      <div className={`${style.loading} loading`}>
        <div className={`${style.follow} follow`} />
        <div
          className={`${style.progressBar} hide`}
          id="progress-bar"
          style={{
            transform: `translateX(${progress - 100}%)`,
          }}
        />
        <p id="count" className={`${style.count} count hide`}>
          {Math.round(progress)}%
        </p>
      </div>

      <div className={`${style.contentDisplay} contentDisplay`} />
    </div>
  );
};

export default Loader;
