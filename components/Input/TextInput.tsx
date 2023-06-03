import { ChangeEventHandler } from "react";
import style from "./TextInput.module.css";

type type = "text" | "submit";

interface InputProps {
  type: type;
  placeholder: string;
  onChange: ChangeEventHandler;
}

const TextInput = ({ type, placeholder, onChange }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      className={style.textInput}
    />
  );
};

export default TextInput;
