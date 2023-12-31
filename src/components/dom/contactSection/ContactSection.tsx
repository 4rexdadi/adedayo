"use client";

import { FC } from "react";
// import { useAppSelector } from "../../../hooks/storeHook";
// import { RefsSliceProps } from "../../../redux/features/refsSlice";
import CanvasElement from "../../canvas/CanvasElement";
import SpaceBoy from "../../canvas/experience/SpaceBoy";
import style from "./contactSectionStyle.module.scss";

interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = (): JSX.Element => {
//  const { spaceBoy } = useAppSelector(
//    (state: { refsSlice: RefsSliceProps }) => state.refsSlice
//  );

  // const camera = useThree((state) => state.camera);

  return (
    <section className={`${style.contactContainer}`}>
      <CanvasElement
        camera={{
          fov: 45,
          near: 0.1,
          far: 100,
          position: [0, 0, 5],
          // position: [-0.31, 0.61, 2.87],
          rotation: [0, 0, 0],
        }}
      >
        <SpaceBoy />
      </CanvasElement>
    </section>
  );
};

export default ContactSection;
