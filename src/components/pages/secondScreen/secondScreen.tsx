import { useContext } from "react";

import { Button } from "../../../shared/button/button";
import { Textarea } from "../../../shared/textarea/textarea";
import { StoreContext } from "../../../store/contex";

import { StateType, TextType } from "../../../store/state";

import style from "./secondScreen.module.css";

type SecondScreenPropsType = {};

export const SecondScreen: React.FC<SecondScreenPropsType> = () => {
  const { state, setState } = useContext(StoreContext);

  const updateTextareaValueChangeHandler = (text: TextType) => {
    const newState = { text: text || "" } as StateType;
    setState({ ...state, ...newState });
  };

  const clickButtonHandler = () => {
    const newState = { step: 3 } as StateType;
    setState({ ...state, ...newState });
  };

  return (
    <div className={style.secondScreen}>
      <div className={style.secondScreen__textarea}>
        <Textarea
          textareaName={""}
          placeholder={"Введите текст статьи"}
          textareaValueChangeHandler={(text: string) =>
            updateTextareaValueChangeHandler(text)
          }
          textareaValue={state.text}
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
