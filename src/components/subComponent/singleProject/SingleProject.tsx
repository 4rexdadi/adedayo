import { FC } from "react";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {}

const SingleProject: FC<SingleProjectProps> = (): JSX.Element => {
  return <div className={style.singleProjectContainer}>SingleProject</div>;
};

export default SingleProject;
