"use client";

// Imports
import { useEffect, useState } from "react";

const useIsTouchDevice = (): boolean => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false);

  useEffect(() => {
    const handleTouchStart = () => {
      setIsTouchDevice(true);
      window.removeEventListener('touchstart', handleTouchStart);
    };

    const checkTouchCapability = () => {
      const alternativeCheck =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // Use type assertion for msMaxTouchPoints
        (navigator as Navigator & { msMaxTouchPoints?: number }).msMaxTouchPoints > 0;

      setIsTouchDevice(alternativeCheck);
      if (!alternativeCheck) {
        window.addEventListener("touchstart", handleTouchStart);
      }
    };

    checkTouchCapability();

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return isTouchDevice;
};

export default useIsTouchDevice;