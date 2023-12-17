"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, ReactNode } from "react";

interface ScrollContainerProps {
  children: ReactNode;
}

const ScrollContainer: FC<ScrollContainerProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
