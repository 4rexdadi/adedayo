"use client";

import { FC, useState } from "react";
import { LeftArrow, RightArrow } from "../../../../public/assets/svg/Svg";
import Dragger from "../../subComponent/dragger/Dragger";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState("");
  const [isClicked, setIsClicked] = useState(0);

  const projects = [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

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
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                id={`${project.id}`}
                className={style.projectCard}
              />
            );
          })}
        </ul>
      </Dragger>

      <SingleProject
        isClicked={isClicked}
        clicked={
          projects.filter(
            (projects) => projects.id.toString() === clickedProject
          )[0]
        }
      />
    </section>
  );
};

export default ProjectSection;
