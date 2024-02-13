"use client";

import Image from "next/image";
import { FC, useState } from "react";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { projectData } from "../../../data/constant";
import SingleProject from "../../subComponent/singleProject/SingleProject";

// Import styles
import "swiper/css";
import "swiper/css/free-mode";
import style from "./projectSectionStyle.module.scss";

interface ProjectSectionProps {}

const ProjectSection: FC<ProjectSectionProps> = () => {
  const [clickedProject, setClickedProject] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(0);

  return (
    <section className={style.projectSection}>
      <div className={style.projectHeader}>
        <p>Selected works</p>
      </div>

      <Swiper
        slidesPerView="auto"
        spaceBetween={30}
        freeMode
        // pagination={{
        //   clickable: true,
        // }}
        modules={[FreeMode]}
        className={style.projectContainer}
      >
        {projectData.map((project) => {
          return (
            <SwiperSlide
              onClick={() => {
                setClickedProject(project.id);
                setIsClicked((prev) => prev + 1);
              }}
              key={project.id}
              className={style.projectCard}
            >
              <div className={style.projectCardImg}>
                <Image
                  alt={project.title}
                  src={project.mainImage}
                  draggable={false}
                  // width={350}
                  // height={250}
                />
              </div>

              <div className={style.projectCardInfo}>
                <p>{project.mainRole}</p>
                <p>{project.date}</p>
              </div>

              <p className={style.projectCardTitle}>{project.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <SingleProject
        isClicked={isClicked}
        clickedProject={
          projectData.filter((projects) => projects.id === clickedProject)[0]
        }
      />
    </section>
  );
};

export default ProjectSection;

// const innerRefArr = Array.from({ length: projectData.length }, () =>
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useRef<HTMLImageElement>(null)
// );
// const outerRefArr = Array.from({ length: projectData.length }, () =>
//   // eslint-disable-next-line react-hooks/rules-of-hooks
//   useRef<HTMLLIElement>(null)
// );

// const onFrame = useCallback(
//   (frame: OnFrameType) => {
//     // bypass Reacts render method to perform frequent style updates, similar concept to React Spring
//     const parallaxFactor = -10;
//     innerRefArr.forEach((ref, i) => {
//       if (outerRefArr.length === i + 1) return;

//       const transformX =
//         (frame.x + outerRefArr[i].current!.offsetLeft) / parallaxFactor;
//       ref.current!.style.transform = `translateX(${transformX}px)`;
//     });
//   },
//   [innerRefArr, outerRefArr]
// );

// <Dragger
//         onFrame={onFrame}
//         onStaticClick={(e) => {
//           setClickedProject(e.id);
//           if (e.id) {
//             setIsClicked((prev) => prev + 1);
//           }
//         }}
//         className="dragger"
//         friction={0.95}
//       >
//         <ul className={style.projects}>
//           {projectData.map((project, i) => {
//             return (
//               <li
//                 key={project.id}
//                 id={`${project.id}`}
//                 className={style.projectCard}
//                 ref={outerRefArr[i]}
//               >
//                 <div id={`${project.id}`}>
//                   <div
//                     id={`${project.id}`}
//                     className={style.projectCardImgContainer}
//                   >
//                     <Image
//                       alt={project.title}
//                       src={project.mainImage}
//                       draggable={false}
//                       ref={innerRefArr[i]}
//                       // width={350}
//                       // height={250}
//                     />
//                   </div>

//                   <div id={`${project.id}`} className={style.projectCardInfo}>
//                     <p>{project.role}</p>
//                     <p>{project.date}</p>
//                   </div>

//                   <p id={`${project.id}`} className={style.projectCardTitle}>
//                     {project.title}
//                   </p>
//                 </div>
//               </li>
//             );
//           })}
//         </ul>
//       </Dragger>
