"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { FC, ReactNode, useRef, useEffect} from "react";
inport { gsap } from "gsap"

interface ScrollContainerProps {
  children: ReactNode;
  root: boolean;
}

const ScrollContainer: FC<ScrollContainerProps> = ({ children, root }) => {
  const lenisRef = useRef()
  
  useEffect(() => {
    function update(time) {
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
