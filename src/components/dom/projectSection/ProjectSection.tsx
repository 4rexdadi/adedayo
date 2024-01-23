"use client";

import { FC, useEffect, useState } from "react";
import { LeftArrow, RightArrow } from "../../../../public/assets/svg/Svg";
import Dragger from "../../subComponent/dragger/Dragger";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState<EventTarget>();

  useEffect(() => {}, [clickedProject]);

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
        onStaticClick={(e) => setClickedProject(e)}
        className="dragger"
        friction={0.95}
      >
        <ul className={style.projects}>
          {projects.map((project) => {
            return (
              <li key={project.id} className={style.projectCard}>
                <SingleProject clicked />
              </li>
            );
          })}
        </ul>
      </Dragger>
    </section>
  );
};

export default ProjectSection;
