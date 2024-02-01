"use client";

import Image from "next/image";
import { FC, useCallback, useRef, useState } from "react";
import { projectData } from "../../../data/constant";
import Dragger, { OnFrameType } from "../../subComponent/dragger/Dragger";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState("");
  const [isClicked, setIsClicked] = useState(0);
  const innerRefArr = Array.from({ length: projectData.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLImageElement>(null)
  );
  const outerRefArr = Array.from({ length: projectData.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLLIElement>(null)
  );

  const onFrame = useCallback(
    (frame: OnFrameType) => {
      // bypass Reacts render method to perform frequent style updates, similar concept to React Spring
      const parallaxFactor = -10;
      innerRefArr.forEach((ref, i) => {
        if (outerRefArr.length === i + 1) return;

        const transformX =
          (frame.x + outerRefArr[i].current!.offsetLeft) / parallaxFactor;
        ref.current!.style.transform = `translateX(${transformX}px)`;
      });
    },
    [innerRefArr, outerRefArr]
  );

  return (
    <section className={style.projectContainer}>
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
        <ul className={style.projects}>
          {projectData.map((project, i) => {
            return (
              <li
                key={project.id}
                id={`${project.id}`}
                className={style.projectCard}
                ref={outerRefArr[i]}
              >
                <div id={`${project.id}`}>
                  <div
                    id={`${project.id}`}
                    className={style.projectCardImgContainer}
                  >
                    <Image
                      alt={project.title}
                      src={project.mainImage}
                      draggable={false}
                      ref={innerRefArr[i]}
                      // width={350}
                      // height={250}
                    />
                  </div>

                  <div id={`${project.id}`} className={style.projectCardInfo}>
                    <p>{project.role}</p>
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
