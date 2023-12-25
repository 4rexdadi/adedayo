import { FC } from "react";
import { jobData } from "../../../data/constant";
import style from "./experienceSectionStyle.module.scss";

interface ExperienceSectionProps {}

const ExperienceSection: FC<ExperienceSectionProps> = (): JSX.Element => {
  return (
    <section className={style.experienceContainer}>
      <p className={style.experienceHeader}>Where I’ve Worked</p>

      <div className={style.experiences}>
        <div className={style.experiencesTabs}>
          {jobData.map((companyName) => {
            return (
              <button type="button" key={companyName.id}>
                {companyName.company}
              </button>
            );
          })}
        </div>

        <div className={style.experiencesContents}>
          {jobData.map((experiences) => {
            return (
              <div key={experiences.id}>
                <p className={style.experiencesInfo}>
                  <span>{experiences.role}</span>
                  <span className={style.companyName}>
                    {` @ ${experiences.company}`}
                  </span>
                </p>
                <p className={style.experiencesDate}>
                  <span>{experiences.date.start}</span>
                  <span>-</span>
                  <span>{experiences.date.end}</span>
                </p>
                <ol className={style.experiencesPoints}>
                  {experiences.accomplishments.map((point) => {
                    return <li key={point.id}>{point.point}</li>;
                  })}
                </ol>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
