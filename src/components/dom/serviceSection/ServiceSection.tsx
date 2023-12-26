import { FC } from "react";
import style from "./serviceSectionStyle.module.scss";

interface ServiceSectionProps {}

const ServiceSection: FC<ServiceSectionProps> = () => {
  return <div className={style.serviceContainer}>ServiceSection</div>;
};

export default ServiceSection;
