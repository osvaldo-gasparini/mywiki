import style from "./TextArea.module.css";

const TextArea = () => {
  return (
    <textarea
      className={style.textArea}
      name=""
      id=""
      cols={30}
      rows={10}
    />
  );
};

export default TextArea;
