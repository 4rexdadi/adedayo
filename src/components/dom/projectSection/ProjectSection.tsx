"use client";

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect, useRef, useState } from "react";
import { Project, projectData } from "../../../data/constant";
import cx from "../../../utils";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState<Project | null>(null);
  const [isClicked, setIsClicked] = useState(0);
  const animation = { duration: 60000, easing: (t: number) => t };
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentProject = searchParams.get("project");

  const handleProjectChange = (slug: string) => {
    const newUrl = `${window.location.pathname}?project=${slug}`;

    router.push(newUrl, { scroll: false });
  };

  useEffect(() => {
    if (currentProject) {
      setClickedProject(
        projectData.find((project) => project.slug === currentProject) || null
      );

      setIsClicked((prev) => prev + 1);
    }
  }, [currentProject]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free",
    renderMode: "performance",
    slides: {
      perView: "auto",
      spacing: 60,
    },
    created: (s) => {
      s.moveToIdx(projectData.length, true, animation);
    },
    updated: (s) => {
      s.moveToIdx(s.track.details.abs + projectData.length, true, animation);
    },
    animationEnded: (s) => {
      s.moveToIdx(s.track.details.abs + projectData.length, true, animation);
    },
  });
  const projectRef = useRef<HTMLElement>(null);

  useEffect(
    () =>
      projectRef.current?.style.setProperty(
        "--projectNum",
        `${projectData.length}`
      ),
    [projectRef]
  );

  return (
    <section className={style.projectSection} ref={projectRef}>
      <div className={style.projectHeader}>
        <p>Selected works</p>
      </div>

      <ul ref={sliderRef} className={cx(style.projectContainer, "keen-slider")}>
        {projectData.map((project) => {
          return (
            <li
              onClick={() => {
                handleProjectChange(project.slug);
                setClickedProject(project);
                setIsClicked((prev) => prev + 1);
              }}
              key={project.id}
              className={cx(style.projectCard, "keen-slider__slide")}
            >
              <div className={style.projectCardImg}>
                <Image
                  alt={project.title}
                  src={project.mainImage}
                  draggable={false}
                  placeholder="blur"
                  // priority={i === 0}
                  sizes="60vw"
                />
              </div>

              <div className={style.projectCardInfo}>
                <p>{project.title}</p>
                <p>{project.mainRole}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <SingleProject isClicked={isClicked} clickedProject={clickedProject} />
    </section>
  );
};

export default ProjectSection;
