"use client";

import { FC, useState } from "react";
import { jobData } from "../../../data/constant";
import style from "./experienceSectionStyle.module.scss";

interface ExperienceSectionProps {}

const ExperienceSection: FC<ExperienceSectionProps> = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={style.experienceContainer}>
      <p className={style.experienceHeader}>Where I&apos;ve Worked</p>

      <div className={style.experiences}>
        <div className={style.experiencesTabs}>
          {jobData.map((companyName) => {
            return (
              <button
                className={companyName.id === activeTab ? style.active : ""}
                type="button"
                key={companyName.id}
                onClick={() => setActiveTab(companyName.id)}
              >
                {companyName.company}
              </button>
            );
          })}
        </div>

        <div className={style.experiencesContents}>
          {jobData
            .filter((work) => work.id === activeTab)
            .map((experiences) => {
              return (
                <div key={experiences.id}>
                  <p className={style.experiencesInfo}>
                    <span>{experiences.role}</span>
                    <span className={style.companyName}>
                      {" @ "}
                      <a
                        target="_blank"
                        href={experiences.companyWebsite}
                        rel="noreferrer"
                      >
                        {experiences.company}
                      </a>
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
