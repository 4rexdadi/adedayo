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
  const weapper = useRef<any>(null);
  const content = useRef<any>(null);
  
  useEffect(() => {
    if (clicked?.id || clicked?.id === 0) {
      setClose(false);
    } else setClose(true);
  }, [clicked, isClicked]);

  return (
    <div
      ref={wrapper}
      style={{
        transform: close ? "translate(-50%, 100%)" : "translate(-50%, 0)",
      }}
      className={cx(style.singleProjectContainer, "testCont", "mainContainer")}
    >
        <ScrollContainer 
         root={false}
         options={{
           lerp: 0.1,
           duration: 1.5,
           smoothTouch: false,
           wrapper: wrapper.current,
           content: content.current,
         }}
         >
        <div
          ref={content}
          className={cx(
            style.singleProjectWrapper,
            "mainContainer",
            "singleProjectWrapper"
          )}
        >
          <div className="singleProjectHeader">
            <button onClick={() => setClose(true)} type="button">
              Close {clicked?.id}
            </button>
          </div>
        </div>
      </ScrollContainer>
    </div>
  );
};

export default SingleProject;
