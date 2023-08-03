import { useContext } from "react";

import { Button } from "../../../shared/button/button";
import { Checkbox } from "../../../shared/checkbox/checkbox";
import { StoreContext } from "../../../store/contex";

import { IsDraftType, StateType, initialState } from "../../../store/state";

import style from "./thirdScreen.module.css";

export function ThirdScreen() {

  const { state, setState } = useContext(StoreContext);

  const onClickCheckboxhandler = (isDraft:IsDraftType) => {
    const newState = { isDraft: !state.isDraft } as StateType;
    setState({ ...state, ...newState });
  };

  const onClickButtonHandler = () => {
    const newState = initialState as StateType;

    console.log(
      {
        author: state.author, // берётся из первого экрана, имя автора 
        title: state.title, // берётся из первого экрана, название статьи 
        text: state.text, // берётся из второго экрана, текст статьи 
        isDraft: state.isDraft,// берётся из третьего экрана
      },
    );

    setState({ ...state, ...newState });
  };


  return (
    <div className={style.thirdScreen}>
      <div className={style.thirdScreen__container}>
        <div className={style.thirdScreen__checkbox}>
          <Checkbox
            colorLabel={`${state.theme ? "white" : "black"}`}
            id={"1"}
            name={"isDraft"}
            labelTitle={"Черновик"}
            labelFor={"draft"}
            checked={state.isDraft}
            onClickHadler={onClickCheckboxhandler} />
        </div>
        <div className={style.thirdScreen__button}>
          <Button
            background={"#8484F7"}
            buttonName={"Отправить"}
            onClickHandler={onClickButtonHandler} />
        </div>
      </div>
    </div>
  );
}