"use client";

// import
import { FC } from "react";
import style from "./loaderStyle.module.scss";

interface LoaderProps {}
interface HexBrickProps {
  type: string;
}

const HexBrick: React.FC<HexBrickProps> = ({ type }) => (
  <div className={`${styles['hex-brick']} ${styles[type]}`}></div>
);

const GelRow: React.FC<{ column: number }> = ({ column }) => (
  <div className={`${styles.gel} ${styles[`c${column}`]} ${styles.r3}`}>
    <HexBrick type="h1" />
    <HexBrick type="h2" />
    <HexBrick type="h3" />
  </div>
);

const Loader: FC<LoaderProps> = () => {
  const columns = Array.from({ length: 12 }, (_, index) => index + 28);

  return (
    <div className={`${style.loaderContainer} loaderContainer`}>
      {columns.map((column) => (
        <GelRow key={column} column={column} />
      ))}
    </div>
  );
};

export default Loader;
