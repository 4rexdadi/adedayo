"use client";

// import
import { useProgress } from "@react-three/drei";
import { FC, useEffect } from "react";
import { useAppDispatch } from "../../../hooks/storeHook";
import { setOverflow } from "../../../redux/features/scrollSlice";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  const { progress } = useProgress();

  const dispatch = useAppDispatch();

  useEffect(() => {
    // Disable & Enable Scrolling
    if (progress < 100) {
      dispatch(setOverflow(false));
    } else dispatch(setOverflow(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress]);

  return progress === 100 ? null : (
    <div className={`${style.loaderContainer} loaderContainer`}>
      <div className={style.loader}>{/* <p>Loading</p> */}</div>
    </div>
  );
};

export default Loader;
