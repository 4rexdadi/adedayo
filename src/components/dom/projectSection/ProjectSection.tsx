// "use client";

import { FC } from "react";
import { LeftArrow, RightArrow } from "../../../../public/assets/svg/Svg";
import Dragger from "../../subComponent/dragger/Dragger";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  // const [clickedProject, setClickedProject] = useState<EventTarget>();

  // useEffect(() => {
  //   if (!clickedProject) return;

  // }, [clickedProject]);

  const projects = [
    {
      id: 0,
      background: "green",
    },
    {
      id: 1,
      background: "pink",
    },
    {
      id: 2,
      background: "blue",
    },
    {
      id: 3,
      background: "orange",
    },
    {
      id: 4,
      background: "red",
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
        // onStaticClick={(e) => setClickedProject(e)}
        className="dragger"
        friction={0.95}
      >
        <ul className={style.projects}>
          {projects.map((project) => {
            return (
              <li
                key={project.id}
                className={style.projectCard}
                style={{ background: project.background }}
              />
            );
          })}
        </ul>
      </Dragger>

      <SingleProject />
    </section>
  );
};

export default ProjectSection;
