"use client";

// import
import { useProgress } from "@react-three/drei";
import { FC } from "react";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  const { progress } = useProgress();

  return progress === 100 ? null : (
    <div className={`${style.loaderContainer} loaderContainer`}>
      <div className={style.loader}>
        <p>Loading</p>
      </div>
    </div>
  );
};

export default Loader;
