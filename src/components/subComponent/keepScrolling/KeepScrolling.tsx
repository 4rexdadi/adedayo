import { FC } from "react";
import style from "./keepScrollingStyle.module.scss";

interface KeepScrollingProps {}

const KeepScrolling: FC<KeepScrollingProps> = (): JSX.Element => {
  return <div className={style.keepScrollingContainer}>KeepScrolling</div>;
};

export default KeepScrolling;
