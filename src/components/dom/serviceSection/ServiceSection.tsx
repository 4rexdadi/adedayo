import { FC } from "react";
import style from "./serviceSectionStyle.module.scss";

interface ServiceSectionProps {}

const ServiceSection: FC<ServiceSectionProps> = () => {
  return (
    <div className={style.serviceContainer}>
      <div className={style.serviceCard}>
        <div className={style.serviceTop}>
          <p>services</p>
        </div>

        <div className={style.serviceBottom}>
          <div>frontend</div>
          <div>backend</div>
          <div>frontend</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
