"use client";

import Image from "next/image";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import { projectData } from "../../../data/constant";
import useWindowSize from "../../../hooks/useWindowSize";
import Dragger, { OnFrameType } from "../../subComponent/dragger/Dragger";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState("");
  const { width } = useWindowSize();
  const [isClicked, setIsClicked] = useState(0);
  const innerRefArr = Array.from({ length: projectData.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLImageElement>(null)
  );
  const outerRefArr = Array.from({ length: projectData.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLLIElement>(null)
  );

  const projectRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      projectRef.current?.style.setProperty(
        "--projectNum",
        `${projectData.length}`
      ),
    [projectRef]
  );

  const onFrame = useCallback(
    (frame: OnFrameType) => {
      // bypass Reacts render method to perform frequent style updates, similar concept to React Spring
      const parallaxFactor = -10;
      
    },
    [innerRefArr, outerRefArr, width]
  );

  return (
    <section className={style.projectSection} ref={projectRef}>
      <div className={style.projectHeader}>
        <p>Selected works</p>
      </div>

      <Dragger
        onFrame={onFrame}
        onStaticClick={(e) => {
          setClickedProject(e.id);
          if (e.id) {
            setIsClicked((prev) => prev + 1);
          }
        }}
        className="dragger"
        friction={0.95}
      >
        <ul className={style.projectContainer}>
          {projectData.map((project, i) => {
            return (
              <li
                key={project.id}
                id={`${project.id}`}
                className={style.projectCard}
                ref={outerRefArr[i]}
              >
                <div id={`${project.id}`}>
                  <div id={`${project.id}`} className={style.projectCardImg}>
                    <Image
                      alt={project.title}
                      src={project.mainImage}
                      draggable={false}
                      ref={innerRefArr[i]}
                      id={`${project.id}`}
                      placeholder="blur"
                      priority={i === 0}
                      // width={350}
                      // height={250}
                      sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
                    />
                  </div>

                  <div id={`${project.id}`} className={style.projectCardInfo}>
                    <p>{project.mainRole}</p>
                    <p>{project.date}</p>
                  </div>

                  <p id={`${project.id}`} className={style.projectCardTitle}>
                    {project.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </Dragger>

      <SingleProject
        isClicked={isClicked}
        clickedProject={
          projectData.filter(
            (projects) => projects.id.toString() === clickedProject
          )[0]
        }
      />
    </section>
  );
};

export default ProjectSection;
