const cx = (...classNames: string[]) => classNames.filter(Boolean).join(" ");
export default cx;
