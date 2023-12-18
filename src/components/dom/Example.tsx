"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback, useRef, useState } from "react";

import Image from "next/image";
import img0 from "../../../public/img1.png";
import img1 from "../../../public/img2.png";
import Dragger, { OnFrameType } from "../subComponent/dragger/Dragger";

const items = [
  {
    src: img0,
    id: 0,
  },
  {
    src: img1,
    id: 1,
  },
  {
    src: img0,
    id: 2,
  },
  {
    src: img1,
    id: 3,
  },
  {
    src: img0,
    id: 4,
  },
  {
    src: img1,
    id: 5,
  },
];

const Example2 = () => {
  const [log, setLog] = useState<OnFrameType>();

  // https://stackoverflow.com/a/54940592/2255980
  const innerRefArr = Array.from({ length: items.length }, () =>
    useRef<HTMLImageElement>(null)
  ); // eslint-disable-line
  const outerRefArr = Array.from({ length: items.length }, () =>
    useRef<HTMLDivElement>(null)
  ); // eslint-disable-line

  const onFrame = useCallback(
    (frame: OnFrameType) => {
      // bypass Reacts render method to perform frequent style updates, similar concept to React Spring
      const parallaxFactor = -10;
      innerRefArr.forEach((ref, i) => {
        const transformX =
          (frame.x + outerRefArr[i].current!.offsetLeft) / parallaxFactor;
        ref.current!.style.transform = `translateX(${transformX}px)`;
      });

      // And then only using state here to update the output log in the DOM
      setLog(frame);
    },
    [innerRefArr, outerRefArr]
  );

  return (
    <section className="section">
      <Dragger onFrame={onFrame} className="dragger" friction={0.95}>
        {items.map((item, i) => (
          <div className="item-img" key={item.id} ref={outerRefArr[i]}>
            <Image className="img" ref={innerRefArr[i]} src={item.src} alt="" />
          </div>
        ))}
      </Dragger>

      {log && (
        <pre>
          outerWidth: {log.outerWidth}px
          <br />
          innerWidth: {log.innerWidth}px
          <br />
          x: {log.x}px
          <br />
          progress: {log.progress} <br />
        </pre>
      )}
    </section>
  );
};

export default Example2;
