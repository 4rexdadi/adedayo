import { FC } from "react";
import style from "./singleProjectStyle.module.scss";

interface SingleProjectProps {
  clicked: { id: number } | undefined;
}

const SingleProject: FC<SingleProjectProps> = ({ clicked }): JSX.Element => {
  return (
    <div
      className={style.singleProjectContainer}
    >{`Project${clicked?.id}`}</div>
  );
};

export default SingleProject;
