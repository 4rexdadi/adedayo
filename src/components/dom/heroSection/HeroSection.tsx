// Imports
import { FC } from "react";
import style from "./heroSectionStyle.module.scss";

interface HeroSectionProps {}

const HeroSection: FC<HeroSectionProps> = () => {
  return (
    <section className={style.heroContainer}>
      <p>this is the hero page</p>
    </section>
  );
};

export default HeroSection;
