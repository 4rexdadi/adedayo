// Imports
import { FC, ReactNode } from "react";
import cx from "../../../utils";
import style from "./marqueeStyle.module.scss";

interface MarqueeProps {
  children: ReactNode;
  repeat?: number;
  duration?: number;
  offset?: number;
  inverted?: boolean;
  className: string;
  animationStart?: boolean;
}

const Marquee: FC<MarqueeProps> = ({
  children,
  repeat = 2,
  duration = 10,
  offset = 0,
  inverted = false,
  className,
  animationStart = true,
}) => {
  return (
    <div
      className={cx(
        style.marqueeContainer,
        className,
        inverted ? style.inverted : ""
      )}
      style={
        {
          "--duration": `${duration}s`,
          "--offset": `${offset % 100}%`,
          "--animation-status": animationStart ? "running" : "paused",
        } as React.CSSProperties
      }
    >
      {new Array(repeat).fill(children).map((_, i) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={i} className={cx(style.inner, i.toString())}>
          {children}
        </div>
      ))}
    </div>
  );
};

export default Marquee;
