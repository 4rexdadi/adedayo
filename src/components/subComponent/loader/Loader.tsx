"use client";

// import
import { FC } from "react";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  interface HexBrickProps {
  type: string;
};

const HexBrick: React.FC<HexBrickProps> = ({ type }) => <div className={`${style.hexBrick} ${style.type}`} />;

interface GelProps {
  column: string;
  row: number;
};

const Gel: React.FC<GelProps> = ({ column, row }) => (
  <div className={`${style.gel} ${style.column} r${style.row}`}>
    <HexBrick type="h1" />
    <HexBrick type="h2" />
    <HexBrick type="h3" />
  </div>
);


  return (
    <div className={`${style.loaderContainer} loaderContainer`}>
    <Gel column="c30" row={3} />
    <Gel column="c31" row={3} />
    <Gel column="c32" row={3} />
    <Gel column="c33" row={3} />
    <Gel column="c34" row={3} />
    <Gel column="c35" row={3} />
    <Gel column="c36" row={3} />
    <Gel column="c37" row={3} />
    </div>
  );
};

export default Loader;
