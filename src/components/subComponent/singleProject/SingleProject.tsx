"use client";

/* eslint-disable react/no-array-index-key */

import { gsap } from "gsap";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import { GitHub, RightArrow } from "../../../../public/assets/svg/Svg";
import { Project } from "../../../data/constant";
import { useAppDispatch, useAppSelector } from "../../../hooks/storeHook";
import { setOverflow } from "../../../redux/features/scrollSlice";
import cx from "../../../utils";
import ScrollContainer from "../scrollContainer/ScrollContainer";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {
  clickedProject: Project | null;
  isClicked: number;
}

const SingleProject: FC<SingleProjectProps> = ({
  clickedProject,
  isClicked,
}): JSX.Element => {
  const [projectClicked, setProjectClicked] = useState<Project | null>(null);
  const dispatch = useAppDispatch();
  const projectRef = useRef<HTMLDivElement>(null);
  const lenis = useAppSelector((state) => state.scrollSlice.lenis);

  const close = (close: boolean, project: Project | null) => {
    gsap.to(projectRef.current, {
      y: close ? "105%" : 0,
      duration: 1,
      onComplete: () => {
        setProjectClicked(project);
      },
    });

    dispatch(setOverflow(close));
  };

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });

    if (clickedProject) {
      setProjectClicked(clickedProject);
      close(false, clickedProject);
    } else close(true, null);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedProject, lenis, isClicked]);

  return (
    <div className={cx(style.singleProjectContainer)} ref={projectRef}>
      {projectClicked && (
        <>
          <div className={cx(style.singleProjectHeader, "mainContainer")}>
            <a
              target="_blank"
              href={projectClicked?.liveSite}
              className={cx(style.headerTitle, "heading")}
            >
              <p>{projectClicked?.title}</p>

              <RightArrow className={style.liveSiteRightArrowSvg} />
            </a>

            <button
              className="btn"
              onClick={() => {
                close(true, null);
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
              wheelMultiplier: 0.9,
            }}
          >
            <div
              className={cx(style.singleProjectContent, "singleProjectContent")}
            >
              <p className={cx(style.mainProjectTitle, "heading")}>
                {projectClicked?.title}
              </p>

              <div className={style.singleProjectMainScreen}>
                {projectClicked.video ? (
                  <video
                    loop
                    muted
                    controls={false}
                    preload="none"
                    autoPlay
                    playsInline
                  >
                    <source src={projectClicked.video} type="video/mp4" />
                    <track label="English" />
                  </video>
                ) : (
                  <Image
                    src={projectClicked.videoALT}
                    alt={projectClicked.introTitle}
                    placeholder="blur"
                    // width={window.innerWidth}
                    // height={window.innerHeight}
                  />
                )}
              </div>

              <div className={style.singleProjectInfo}>
                <p className={style.projectInfoHeader}>About the project</p>
                <p className={cx(style.projectIntroTitle, "heading")}>
                  {projectClicked?.introTitle}
                </p>

                <div className={style.projectInfoContainer}>
                  <div className={style.projectLeft}>
                    <div className={style.projectDescription}>
                      {projectClicked?.description.map((desc, index) => {
                        return <p key={index}>{desc}</p>;
                      })}
                    </div>

                    <div className={style.projectLinks}>
                      <a href={projectClicked?.liveSite} target="_blank">
                        <span>{projectClicked?.linkName}</span>
                        <RightArrow className={style.rightArrowSvg} />
                      </a>

                      {projectClicked?.gitHub && (
                        <a href={projectClicked?.gitHub} target="_blank">
                          <GitHub className={style.gitHubSvg} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className={style.projectRight}>
                    <div>
                      <p className={style.projectSubHeader}>role</p>
                      <p>{projectClicked?.roles}</p>
                    </div>

                    {projectClicked?.technologies && (
                      <div>
                        <p className={style.projectSubHeader}>technologies</p>
                        <p className={style.projectTechs}>
                          {projectClicked?.technologies.map((tech, index) => {
                            return <span key={index}>{tech}</span>;
                          })}
                        </p>
                      </div>
                    )}

                    <div>
                      <p className={style.projectSubHeader}>date</p>
                      <p>{projectClicked?.date}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={style.projectSnapshots}>
                <p className={style.projectSubHeader}>Snapshots 📸</p>

                <div className={style.snapshotContainer}>
                  {projectClicked?.images.map((img, index) => {
                    return (
                      <div className={style.snapshotContent} key={index}>
                        <Image
                          src={img.url}
                          alt={img.caption}
                          placeholder="blur"
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
        </>
      )}
    </div>
  );
};

export default SingleProject;
