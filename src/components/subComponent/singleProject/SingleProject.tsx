"use client";

/* eslint-disable react/no-array-index-key */

import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { GitHub, RightArrow } from "../../../../public/assets/svg/Svg";
import { Project } from "../../../data/constant";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHook";
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
  const lenis = useAppSelector((state) => state.scrollSlice.lenis);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });

    if (clickedProject?.id || clickedProject?.id === 0) {
      setClose(false);
      dispatch(setOverflow(false));
    } else {
      dispatch(setOverflow(true));
      setClose(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedProject, isClicked, lenis]);

  return (
    <div
      style={{
        transform: close ? "translate(-50%, 130%)" : "translate(-50%, 0)",
      }}
      className={cx(style.singleProjectContainer)}
    >
      <div className={cx(style.singleProjectHeader, "mainContainer")}>
        <a
          target="_blank"
          rel="noreferrer"
          href={clickedProject?.liveSite}
          className={cx(style.headerTitle, "heading")}
        >
          <p>{clickedProject?.title}</p>

          <RightArrow className={style.liveSiteRightArrowSvg} />
        </a>

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
        <div className={cx(style.singleProjectContent, "singleProjectContent")}>
          <p className={cx(style.mainProjectTitle, "heading")}>
            {clickedProject?.title}
          </p>

          {clickedProject && (
            <div className={style.singleProjectMainScreen}>
              <Image
                alt={clickedProject.title}
                src={clickedProject.mainImage}
                // width={window.innerWidth}
                // height={window.innerHeight}
              />
            </div>
          )}

          <div className={style.singleProjectInfo}>
            <p className={style.projectInfoHeader}>About the project</p>
            <p className={cx(style.projectIntroTitle, "heading")}>
              {clickedProject?.introTitle}
            </p>

            <div className={style.projectInfoContainer}>
              <div className={style.projectLeft}>
                <div className={style.projectDescription}>
                  {clickedProject?.description.map((desc, index) => {
                    return <p key={index}>{desc}</p>;
                  })}
                </div>

                <div className={style.projectLinks}>
                  <a
                    href={clickedProject?.liveSite}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>{clickedProject?.linkName}</span>
                    <RightArrow className={style.rightArrowSvg} />
                  </a>

                  {clickedProject?.gitHub && (
                    <a
                      href={clickedProject?.gitHub}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <GitHub className={style.gitHubSvg} />
                    </a>
                  )}
                </div>
              </div>

              <div className={style.projectRight}>
                <div>
                  <p className={style.projectSubHeader}>role</p>
                  <p>{clickedProject?.roles}</p>
                </div>

                {clickedProject?.technologies && (
                  <div>
                    <p className={style.projectSubHeader}>technologies</p>
                    <p className={style.projectTechs}>
                      {clickedProject?.technologies.map((tech, index) => {
                        return <span key={index}>{tech}</span>;
                      })}
                    </p>
                  </div>
                )}

                <div>
                  <p className={style.projectSubHeader}>date</p>
                  <p>{clickedProject?.date}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.projectSnapshots}>
            <p className={style.projectSubHeader}>Snapshots 📸</p>

            <div className={style.snapshotContainer}>
              {clickedProject?.images.map((img, index) => {
                return (
                  <div className={style.snapshotContent} key={index}>
                    <Image
                      src={img.url}
                      alt={img.caption}
                      // width={window.innerWidth}
                      // height={window.innerHeight}
                    />
                    <p>{img.caption}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default SingleProject;
