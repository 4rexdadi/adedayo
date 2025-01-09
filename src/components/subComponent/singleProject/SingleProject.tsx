"use client";

/* eslint-disable react/no-array-index-key */

import { gsap } from "gsap";
import Image, { StaticImageData } from "next/image";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
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

// Separate components for better code organization and performance
const ProjectHeader = memo(
  ({
    title,
    liveSite,
    onClose,
  }: {
    title: string;
    liveSite: string;
    onClose: () => void;
  }) => (
    <div className={cx(style.singleProjectHeader, "mainContainer")}>
      <a
        href={liveSite}
        className={cx(style.headerTitle, "heading")}
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>{title}</p>
        <RightArrow className={style.liveSiteRightArrowSvg} />
      </a>
      <button className="btn" onClick={onClose} type="button">
        Close
      </button>
    </div>
  )
);

const VideoPlayer = memo(({ src }: { src: string }) => (
  <video
    loop
    muted
    autoPlay
    playsInline
    preload="metadata"
    className={style.videoPlayer}
  >
    <source src={src} type="video/mp4" />
    <track kind="captions" />
  </video>
));

const ProjectImage = memo(
  ({ src, alt }: { src: string | StaticImageData; alt: string }) => (
    <Image
      src={src}
      alt={alt}
      draggable={false}
      placeholder="blur"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
      loading="lazy"
      quality={75}
      className={style.projectImage}
    />
  )
);

ProjectImage.displayName = "ProjectImage";
ProjectHeader.displayName = "ProjectHeader";
VideoPlayer.displayName = "VideoPlayer";

const SingleProject: FC<SingleProjectProps> = ({
  clickedProject,
  isClicked,
}) => {
  const [projectClicked, setProjectClicked] = useState<Project | null>(null);
  const dispatch = useAppDispatch();
  const projectRef = useRef<HTMLDivElement>(null);
  const lenis = useAppSelector((state) => state.scrollSlice.lenis);

  const close = useCallback(
    (shouldClose: boolean, project: Project | null) => {
      gsap.to(projectRef.current, {
        y: shouldClose ? "105%" : 0,
        duration: 1,
        onComplete: () => setProjectClicked(project),
      });

      dispatch(setOverflow(shouldClose));
    },
    [dispatch]
  );

  const handleClose = useCallback(() => {
    window.history.replaceState(null, "", "/");
    close(true, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [close]);

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });

    if (clickedProject) {
      setProjectClicked(clickedProject);
      close(false, clickedProject);
    } else close(true, null);
  }, [clickedProject, lenis, isClicked, close]);

  if (!projectClicked) return null;

  return (
    <div className={cx(style.singleProjectContainer)} ref={projectRef}>
      <ProjectHeader
        title={projectClicked.title}
        liveSite={projectClicked.liveSite}
        onClose={handleClose}
      />

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
        <div className={cx(style.singleProjectContent, "singleProjectContent")}>
          <p className={cx(style.mainProjectTitle, "heading")}>
            {projectClicked?.title}
          </p>

          <div className={style.singleProjectMainScreen}>
            {projectClicked.video ? (
              <VideoPlayer src={projectClicked.video} />
            ) : (
              <ProjectImage
                src={projectClicked.videoALT}
                alt={projectClicked.introTitle}
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

          <section className={style.projectSnapshots}>
            <h2 className={style.projectSubHeader}>Snapshots 📸</h2>

            <div className={style.snapshotContainer}>
              {projectClicked.images.map((img, index) => (
                <div
                  className={style.snapshotContent}
                  key={`snapshot-${index}`}
                >
                  {img.url.toString().includes(".mp4") ? (
                    <VideoPlayer src={img.url.toString()} />
                  ) : (
                    <ProjectImage src={img.url} alt={img.caption} />
                  )}
                  <p>{img.caption}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default memo(SingleProject);
