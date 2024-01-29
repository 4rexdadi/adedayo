"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { Project } from "../../../data/constant";
import { useAppDispatch } from "../../../hooks/storeHook";
import { setOverflow } from "../../../redux/features/scrollSlice";
import cx from "../../../utils";
import ScrollContainer from "../scrollContainer/ScrollContainer";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {
  clickedProject: Project | undefined;
  isClicked: number;
}

const SingleProject: FC<SingleProjectProps> = ({
  clickedProject,
  isClicked,
}): JSX.Element => {
  const [close, setClose] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (clickedProject?.id || clickedProject?.id === 0) {
      setClose(false);
      dispatch(setOverflow(false));
    } else {
      dispatch(setOverflow(true));
      setClose(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedProject, isClicked]);

  return (
    <div
      style={{
        transform: close ? "translate(-50%, 150%)" : "translate(-50%, 0)",
      }}
      className={cx(style.singleProjectContainer)}
    >
      <div className={style.singleProjectHeader}>
        <button
          className="btn"
          onClick={() => {
            dispatch(setOverflow(true));
            setClose(true);
          }}
          type="button"
        >
          Close
        </button>

        <p className={style.headerTitle}>{clickedProject?.title}</p>

        <a target="_black" href={clickedProject?.liveSite}>
          Live site
        </a>
      </div>

      <ScrollContainer
        root={false}
        className={cx(style.scrollContainer, "mainContainer")}
        options={{
          lerp: 0.1,
          duration: 1.2,
          smoothTouch: false,
          wheelMultiplier: 0.7,
        }}
      >
        <div className={style.singleProjectContent}>
          <h3>{clickedProject?.title}</h3>

          {clickedProject && (
            <div className={style.singleProjectMainScreen}>
              <Image
                alt={clickedProject.title}
                width={window.innerWidth}
                height={window.innerHeight}
                src={clickedProject.mainImage}
              />
            </div>
          )}

          <div style={{ height: "100vh", background: "transparent" }} />

          <p>Bottom</p>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default SingleProject;
