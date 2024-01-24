"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, ReactNode } from "react";

interface ScrollContainerProps {
  children: ReactNode;
  root: boolean;
}

const ScrollContainer: FC<ScrollContainerProps> = ({ children, root }) => {
  return (
    <ReactLenis
      root={root}
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothTouch: false,
        // wrapper: document.querySelector(".singleProjectWrapper"),
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
