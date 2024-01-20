"use client";

// import
import { FC } from "react";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {

  return (
    <div className={`${style.loaderContainer} loaderContainer`}/>
  );
};

export default Loader;
