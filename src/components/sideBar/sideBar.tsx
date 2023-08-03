import { useContext, useState } from "react";

import { Button } from "../../shared/button/button";
import { Logo } from "../../shared/logo/logo";
import { ToggleTheme } from "../../shared/toggleTheme/toggleTheme";
import { StoreContext } from "../../store/contex";
import { StateType, StepType } from "../../store/state";

import style from "./sideBar.module.css";

export const Sidebar: React.FC = () => {
  const { state, setState } = useContext(StoreContext);

  const updateStepOnClickHandler = (step: StepType) => {
    const newState = { step: step } as StateType;
    setState({ ...state, ...newState });
  };

  const clickButtonHandler = () => {
    const newState = { step: 1 } as StateType;
    setState({ ...state, ...newState });
  };

  return (
    <div
      className={`${style.sidebar} ${
        state.theme ? style.sidebar__darktheme : ""
      }`}>
      <div className={style.sidebar__container}>
        <div className={style.sideBar_mainPart}>
          <Logo />
          <Button
            mesIcon={true}
            smallFont={true}
            buttonName={"Cоздать статью"}
            onClickHandler={() => clickButtonHandler()}
            background={`${state.theme ? "#3E4757" : "#3A95FF"}`}
          />

          <ul className={style.menu}>
            <li
              className={`${style.menu__item} ${
                state.step === 1 ? style.menu__item__active : ""
              }`}
              role="none"
              onClick={() => updateStepOnClickHandler(1)}>
              {" "}
              Имя автора
              <br /> и название статьи
            </li>
            <li
              className={`${style.menu__item} ${
                state.step === 2 ? style.menu__item__active : ""
              }`}
              role="none"
              onClick={() => updateStepOnClickHandler(2)}>
              Написать текст статьи
            </li>
            <li
              className={`${style.menu__item} ${
                state.step === 3 ? style.menu__item__active : ""
              }`}
              role="none"
              onClick={() => updateStepOnClickHandler(3)}>
              Отправить статью
            </li>
          </ul>
        </div>
        <ToggleTheme />
      </div>
    </div>
  );
};
