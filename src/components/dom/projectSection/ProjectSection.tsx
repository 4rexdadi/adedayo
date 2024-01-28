"use client";

import Image from "next/image";
import { FC, useCallback, useRef, useState } from "react";
import { LeftArrow, RightArrow } from "../../../../public/assets/svg/Svg";
import { projectData } from "../../../data/constant";
import Dragger, { OnFrameType } from "../../subComponent/dragger/Dragger";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState("");
  // const [log, setLog] = useState<OnFrameType>();
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
        const transformX =
          (frame.x + outerRefArr[i].current!.offsetLeft) / parallaxFactor;
        ref.current!.style.transform = `translateX(${transformX}px)`;
      });

      // And then only using state here to update the output log in the DOM
      //setLog(frame);
    },
    [innerRefArr, outerRefArr]
  );

  return (
    <section className={style.projectContainer}>
      <div className={style.projectHeader}>
        <p>Selected works</p>

        <span>
          <LeftArrow className="" />
          <RightArrow className="" />
        </span>
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
                <Image
                  alt={project.title}
                  width={350}
                  height={250}
                  src={project.mainImage}
                  draggable={false}
                  id={`${project.id}`}
                  ref={innerRefArr[i]}
                />
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
