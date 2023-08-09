import { useState } from "react";

import style from "./textarea.module.css";

type TextareaPropsType = {
  textareaName: string;
  placeholder: string;
  addText: (text: string) => void;
};

export const Textarea: React.FC<TextareaPropsType> = ({
  textareaName,
  placeholder,
  addText,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <textarea
      onBlur={() => addText(inputValue)}
      className={style.textarea}
      name={textareaName}
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.currentTarget.value)}
    />
  );
};
