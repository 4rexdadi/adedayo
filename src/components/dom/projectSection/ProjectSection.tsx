"use client";

import { KeenSliderOptions } from "keen-slider";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Project, projectData } from "../../../data/constant";
import cx from "../../../utils";
import SingleProject from "../../subComponent/singleProject/SingleProject";
import style from "./projectSectionStyle.module.scss";

type FilterType = "all" | "pinned";

// Separate components for better performance
const ProjectCard = memo(
  ({ project, onClick }: { project: Project; onClick: () => void }) => (
    <li className={cx(style.projectCard, "keen-slider__slide")}>
      <button
        type="button"
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        tabIndex={0}
        className={style.projectCardButton}
      >
        <div className={style.projectCardImg}>
          <Image
            alt={project.title}
            src={project.mainImage}
            draggable={false}
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
            loading="lazy"
            quality={75}
            className={style.projectImage}
          />
        </div>

        <div className={style.projectCardInfo}>
          <h3>{project.title}</h3>
        </div>
      </button>
    </li>
  )
);

ProjectCard.displayName = "ProjectCard";

const FilterButtons = memo(
  ({
    currentFilter,
    onFilterChange,
  }: {
    currentFilter: FilterType;
    onFilterChange: (filter: FilterType) => void;
  }) => (
    <div
      className={style.filterButtons}
      role="group"
      aria-label="Filter projects"
    >
      <button
        className={cx(
          style.filterButton,
          currentFilter === "all" ? style.active : ""
        )}
        type="button"
        onClick={() => onFilterChange("all")}
        // aria-pressed={currentFilter === "all"}
      >
        All
      </button>
      <button
        className={cx(
          style.filterButton,
          currentFilter === "pinned" ? style.active : ""
        )}
        type="button"
        onClick={() => onFilterChange("pinned")}
        // aria-pressed={currentFilter === "pinned"}
      >
        Pinned
      </button>
    </div>
  )
);

FilterButtons.displayName = "FilterButtons";

const ProjectSection: FC = () => {
  const [clickedProject, setClickedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<FilterType>("pinned");
  const [isClicked, setIsClicked] = useState(0);
  const projectRef = useRef<HTMLElement>(null);
  const searchParams = useSearchParams();
  const currentProject = searchParams.get("project");
  const animation = { duration: 60000, easing: (t: number) => t };

  // Memoized filtered projects
  const filteredProjects = useMemo(
    () =>
      filter === "all"
        ? projectData
        : projectData.filter((project) => project.pinned),
    [filter]
  );

  // Slider configuration
  const sliderConfig: KeenSliderOptions = {
    loop: true,
    mode: "free" as const,
    renderMode: "performance" as const,
    slides: {
      perView: "auto" as const,
      spacing: 60,
    },
    created: (s) => {
      s.moveToIdx(filteredProjects.length, true, animation);
    },
    updated: (s) => {
      s.moveToIdx(
        s.track.details.abs + filteredProjects.length,
        true,
        animation
      );
    },
    animationEnded: (s) => {
      s.moveToIdx(
        s.track.details.abs + filteredProjects.length,
        true,
        animation
      );
    },
  };

  const [sliderRef, slider] = useKeenSlider(sliderConfig);

  // Handle project click
  const handleProjectClick = useCallback((project: Project) => {
    setClickedProject(project);
    setIsClicked((prev) => prev + 1);
    const newUrl = `${window.location.pathname}?project=${project.slug}`;
    window.history.replaceState(null, "", newUrl);
  }, []);

  // Handle filter change
  const handleFilterChange = useCallback((newFilter: FilterType) => {
    setFilter(newFilter);
  }, []);

  // Update project from URL params
  useEffect(() => {
    if (currentProject) {
      const project = projectData.find((p) => p.slug === currentProject);
      if (project) {
        setClickedProject(project);
        setIsClicked((prev) => prev + 1);
      }
    }
  }, [currentProject]);

  // Update CSS variable for project count
  useEffect(() => {
    if (projectRef.current) {
      projectRef.current.style.setProperty(
        "--projectNum",
        `${filteredProjects.length}`
      );
    }
  }, [filteredProjects.length]);

  // Update slider when filter changes
  useEffect(() => {
    if (slider) {
      slider.current?.update();
    }
  }, [filter, slider]);

  return (
    <section
      className={style.projectSection}
      ref={projectRef}
      aria-label="Projects Gallery"
    >
      <div className={style.projectHeader}>
        <h2>Works</h2>
        <FilterButtons
          currentFilter={filter}
          onFilterChange={handleFilterChange}
        />
      </div>

      <ul
        ref={sliderRef}
        className={cx(style.projectContainer, "keen-slider")}
        aria-label="Project list"
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </ul>

      <SingleProject isClicked={isClicked} clickedProject={clickedProject} />
    </section>
  );
};

export default memo(ProjectSection);
