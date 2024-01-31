"use client";

// Imports
import Lenis from "@studio-freight/lenis/types";
import { useEffect } from "react";
import { useAppSelector } from "./storeHook";

export const useScroll = (callback: (e: Lenis) => void) => {
  // get lenis from global store
  const lenis = useAppSelector((state) => state.scrollSlice.lenis);

  useEffect(() => {
    // check if lenis and on scroll fires the callback function that will be passed as params
    if (!lenis) return undefined;
    lenis.on("scroll", callback);

    return () => {
      // cleanup
      lenis.off("scroll", callback);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lenis, callback]);
};

export default useScroll;
