"use client";

// import
import { FC, useState } from "react";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return isLoading === false ? null : (
    <div className={`${style.loaderContainer} loaderContainer`}/>
  );
};

export default Loader;
