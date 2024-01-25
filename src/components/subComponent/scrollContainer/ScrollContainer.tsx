"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { FC, ReactNode, useEffect, useRef } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { gsap } from "gsap"

interface ScrollContainerProps {
  children: ReactNode;
  root: boolean;
  options: {
    wrapper?: (HTMLElement | Window | any);
    content?: HTMLElement | undefined | any;
    wheelEventsTarget?: (HTMLElement | Window);
    lerp?: number | undefined;
    duration?: number | undefined;
    easing?: (rawValue: number) => number | undefined;
    orientation?: string | undefined;
    gestureOrientation?: string | undefined;
    smoothWheel?: boolean | undefined;
    smoothTouch?: boolean | undefined;
    syncTouch?: boolean | undefined;
    syncTouchLerp?: number | undefined;
    touchInertiaMultiplier?: number | undefined;
    normalizeWheel?: boolean | undefined;
    infinite?: boolean | undefined;
    autoResize?: boolean | undefined;
  };
}

const ScrollContainer: FC<ScrollContainerProps> = ({ children, root, options }) => {
  const lenisRef = useRef<any>()
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => {
      gsap.ticker.remove(update)
    }
  })
  
  
  return (
    <ReactLenis
      ref={lenisRef} 
      autoRaf={false}
      root={root}
      options={options}
    >
      {children}
    </ReactLenis>
  );
};

export default ScrollContainer;
