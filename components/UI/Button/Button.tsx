import { ReactNode } from "react";
import style from "./Button.module.css";

type Props = {
  children: ReactNode;
  className?: string | string[];
};

const Button = ({ children, className }: Props) => {
  return <button className={`${style.button} ${className}`}>{children}</button>;
};

export default Button;
