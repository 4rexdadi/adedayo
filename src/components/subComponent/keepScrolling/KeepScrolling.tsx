import { FC } from "react";
import style from "./keepScrollingStyle.module.scss";

interface KeepScrollingProps {}

const KeepScrolling: FC<KeepScrollingProps> = (): JSX.Element => {
  return <div className={style.keepScrollingContainer}>Keep Scrolling</div>;
};

export default KeepScrolling;
