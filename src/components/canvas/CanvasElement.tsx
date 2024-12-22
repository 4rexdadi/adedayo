// import
import { Preload } from "@react-three/drei";
import { Canvas, Props } from "@react-three/fiber";
import { JSX, RefAttributes, Suspense } from "react";
import Lights from "./utils/Lights";

const CanvasElement = (
  props: JSX.IntrinsicAttributes & Props & RefAttributes<HTMLCanvasElement>
) => {
  const { children } = props;

  return (
    <Suspense fallback={null}>
      <Canvas
        {...props}
        style={{
          backgroundColor: "transparent",
          width: " 100%",
          height: "100vh",
          outline: "none",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 100,
        }}
        // camera={{
        //   fov: 45,
        //   near: 0.1,
        //   far: 100,
        //   position: [0, 0, 5],
        //   rotation: [0, 0, 0],
        // }}
      >
        <Preload all />

        <Lights />

        {children}
      </Canvas>
    </Suspense>
  );
};

export default CanvasElement;
