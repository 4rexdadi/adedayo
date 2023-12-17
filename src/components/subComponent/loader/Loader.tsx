// import
import { FC } from "react";
import cx from "../../../utils";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return <div className={cx(style.loaderContainer)} />;
};

export default Loader;
