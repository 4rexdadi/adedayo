import { FC } from "react";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {
  clicked: boolean;
}

const SingleProject: FC<SingleProjectProps> = ({ clicked }): JSX.Element => {
  return <div className={style.singleProjectContainer}> {clicked} </div>;
};

export default SingleProject;
