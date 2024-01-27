"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useEffect, useState } from "react";
import { Project } from "../../../data/constant";
import { useAppDispatch } from "../../../hooks/storeHook";
import { setOverflow } from "../../../redux/features/scrollSlice";
import cx from "../../../utils";
import ScrollContainer from "../scrollContainer/ScrollContainer";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {
  clickedProject: Project | undefined;
  isClicked: number;
}

const SingleProject: FC<SingleProjectProps> = ({
  clickedProject,
  isClicked,
}): JSX.Element => {
  const [close, setClose] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (clickedProject?.id || clickedProject?.id === 0) {
      setClose(false);
      dispatch(setOverflow(false));
    } else {
      dispatch(setOverflow(true));
      setClose(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickedProject, isClicked]);

  return (
    <ScrollContainer
      root={false}
      style={{
        transform: close ? "translate(-50%, 150%)" : "translate(-50%, 0)",
      }}
      className={cx(style.scrollContainer)}
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothTouch: false,
        wheelMultiplier: 0.7,
      }}
    >
      <div className={cx(style.singleProjectWrapper, "mainContainer")}>
        <div className={style.singleProjectHeader}>
          <button
            className="btn"
            onClick={() => {
              dispatch(setOverflow(true));
              setClose(true);
            }}
            type="button"
          >
            Close
          </button>
        </div>

        <div className={style.singleProjectContent}>
          <div style={{ height: "100vh", background: "red" }} />
          <div style={{ height: "100vh", background: "blue" }} />
          <div style={{ height: "100vh", background: "orange" }} />
          <div style={{ height: "100vh", background: "pink" }} />
          <div style={{ height: "100vh", background: "yellow" }} />
        </div>
      </div>
    </ScrollContainer>
  );
};

export default SingleProject;
