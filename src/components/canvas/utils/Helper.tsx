// Imports
import { Perf } from "r3f-perf";
import { FC } from "react";

interface HelperProps {}

const Helper: FC<HelperProps> = () => {
  return (
    <>
      <gridHelper />

      <axesHelper />

      <Perf position="bottom-left" />
    </>
  );
};

export default Helper;
