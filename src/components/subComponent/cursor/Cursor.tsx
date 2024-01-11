"use client";

// Imports
import gsap from "gsap";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import useIsTouchDevice from "../../../hooks/useIsTouchDevice";
import cx from "../../../utils";
import style from "./cursorStyle.module.scss";

interface CursorProps {}

const Cursor: FC<CursorProps> = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const [isGrab, setIsGrab] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [hasMoved, setHasMoved] = useState(false);
  const isTouchDevice = useIsTouchDevice();

  const onMouseMove = useCallback(
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      gsap.to(cursor.current, {
        x: clientX,
        y: clientY,
        duration: hasMoved ? 0.6 : 0,
        ease: "expo.out",
      });
      setHasMoved(true);
    },
    [hasMoved]
  );

  useEffect(() => {
    if (isTouchDevice) return undefined;
    window.addEventListener("mousemove", onMouseMove, false);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasMoved, isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return undefined;
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return undefined;
    const onMouseEnter = () => {
      setIsPointer(true);
    };
    const onMouseLeave = () => {
      setIsPointer(false);
    };

    const elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']"
      ),
    ];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return undefined;
    const onMouseEnter = () => {
      setIsGrab(true);
    };
    const onMouseLeave = () => {
      setIsGrab(false);
    };

    const elements = [
      ...document.querySelectorAll(
        "button,a,input,label,[data-cursor='pointer']"
      ),
    ];

    elements.forEach((element) => {
      element.addEventListener("mouseenter", onMouseEnter, false);
      element.addEventListener("mouseleave", onMouseLeave, false);
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener("mouseenter", onMouseEnter, false);
        element.removeEventListener("mouseleave", onMouseLeave, false);
      });
    };
  }, [isTouchDevice]);

  return (
    !isTouchDevice && (
      <div
        style={{ opacity: hasMoved ? 1 : 0 }}
        className={style.cursorContainer}
      >
        <div ref={cursor}>
          <div
            className={cx(
              style.cursor,
              isGrab ? style.grab : "",
              isPointer ? style.pointer : ""
            )}
          />
        </div>
      </div>
    )
  );
};

export default Cursor;
