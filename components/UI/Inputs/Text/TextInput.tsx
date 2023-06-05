import { ChangeEventHandler } from "react";
import style from "./TextInput.module.css";

type type = "text" | "search";

const classNamesOfTypes = {
  text: style.text,
  search: style.search,
};

interface InputProps {
  type: type;
  placeholder?: string;
  onChange?: ChangeEventHandler;
}

const TextInput = ({ type, placeholder, onChange, ...props }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={classNamesOfTypes[type]}
      {...props}
    />
  );
};

export default TextInput;
