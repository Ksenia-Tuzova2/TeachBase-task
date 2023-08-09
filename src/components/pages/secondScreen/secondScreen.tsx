import { Button } from "../../../shared/button/button";
import { Textarea } from "../../../shared/textarea/textarea";

import { StateType, TextType } from "../../../store/state";

import style from "./secondScreen.module.css";

type SecondScreenPropsType = {
  sendText:(text:string)=>void,
  updateStep:(step:number)=>void
};

export const SecondScreen: React.FC<SecondScreenPropsType> = (
  {sendText,updateStep},
) => {

  const addText = (text: TextType) => {
    sendText(text);
  };

  const clickButtonHandler = () => {
    updateStep(3);
  };

  return (
    <div className={style.secondScreen}>
      <div className={style.secondScreen__textarea}>
        <Textarea
          textareaName={""}
          placeholder={"Введите текст статьи"}
          addText={addText}
          
        />
      </div>
      <div className={style.secondScreen__button}>
        <Button
          buttonName={"Далее"}
          onClickHandler={() => clickButtonHandler()}
        />
      </div>
    </div>
  );
};
