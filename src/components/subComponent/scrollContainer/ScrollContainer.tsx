"use client";

import { useFrame } from "@studio-freight/hamo";
import Lenis from "@studio-freight/lenis";
import {
  CSSProperties,
  FC,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties | undefined;
  reset?: boolean;
  root?: boolean;
  options: {
    wheelEventsTarget?: HTMLElement | Window;
    lerp?: number | undefined;
    duration?: number | undefined;
    easing?: ((t: number) => number) | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    gestureOrientation?: "vertical" | "horizontal" | "both" | undefined;
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

const ScrollContainer: FC<ScrollContainerProps> = ({
  children,
  className = "",
  style = undefined,
  reset = false,
  root = true,
  options,
}) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !contentRef.current) return undefined;

    const lenis = new Lenis({
      wrapper: root ? undefined : wrapperRef.current, // element which has overflow
      content: root ? undefined : contentRef.current, // usually wrapper's direct child

      ...options,
    });

    lenis.start();
    setLenis(lenis);

    return () => {
      lenis.destroy();
    };
  }, [options, root]);

  useEffect(() => {
    if (reset) {
      lenis?.scrollTo(0, { immediate: true });
    }
  }, [lenis, reset]);

  useFrame((time: number) => {
    lenis?.raf(time);
  });

  return (
    <div className={className} style={style} ref={wrapperRef}>
      <div ref={contentRef}>{children}</div>
    </div>
  );
};

export default ScrollContainer;
