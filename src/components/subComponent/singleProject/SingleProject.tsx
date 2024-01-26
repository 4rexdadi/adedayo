"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { FC, useEffect, useState } from "react";
import cx from "../../../utils";
import ScrollContainer from "../scrollContainer/ScrollContainer";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {
  clicked: { id: number } | undefined;
  isClicked: number;
}

const SingleProject: FC<SingleProjectProps> = ({
  clicked,
  isClicked,
}): JSX.Element => {
  const [close, setClose] = useState(true);

  useEffect(() => {
    if (clicked?.id || clicked?.id === 0) {
      setClose(false);
    } else setClose(true);
  }, [clicked, isClicked]);

  return (
    <ScrollContainer
      root={false}
      style={{
        overflow: "auto",
        transform: close ? "translate(-50%, 100%)" : "translate(-50%, 0)",
      }}
      className={cx(style.scrollContainer)}
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
      }}
    >
      <div className={cx(style.singleProjectWrapper, "mainContainer")}>
        <div className={style.singleProjectHeader}>
          <button onClick={() => setClose(true)} type="button">
            Close {clicked?.id}
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
