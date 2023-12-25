import { FC } from "react";
import { LeftArrow, RightArrow } from "../../../../public/assets/svg/Svg";
import Dragger from "../../subComponent/dragger/Dragger";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
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
          <li className={style.projectCard} style={{ background: "red" }} />
          <li className={style.projectCard} style={{ background: "green" }} />
          <li className={style.projectCard} style={{ background: "pink" }} />
          <li className={style.projectCard} style={{ background: "blue" }} />
          <li className={style.projectCard} style={{ background: "orange" }} />
        </ul>
      </Dragger>
    </section>
  );
};

export default ProjectSection;
