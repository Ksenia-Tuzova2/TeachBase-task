import { Button } from "../../shared/button/button";
import { Logo } from "../../shared/logo/logo";
import { ToggleTheme } from "../../shared/toggleTheme/toggleTheme";
import { StateType, StepType } from "../../store/state";

import style from "./sideBar.module.css";

type SidebarPropsType={
  updateStep:(step:number)=>void;
  changeTheme:(theme:boolean)=>void
  step:number;
  theme:boolean
}
export const Sidebar: React.FC<SidebarPropsType> = (
  {updateStep,
     step,
     changeTheme,
      theme=true}) => {

  const updateStepOnClickHandler = (step: StepType) => {
    updateStep(step);
  };

  const clickButtonHandler = () => {

  };

  return (
    <div
      className={`${style.sidebar} ${
       theme ? style.sidebar__darktheme : ""
      }`}>
      <div className={style.sidebar__container}>
        <div className={style.sideBar_mainPart}>
          <Logo />
          <Button
            mesIcon={true}
            smallFont={true}
            buttonName={"Cоздать статью"}
            onClickHandler={() => clickButtonHandler()}
            background={`${theme ? "#3E4757" : "#3A95FF"}`}
          />

          <ul className={style.menu}>
            <li
              className={`${style.menu__item} ${
                step === 1 ? style.menu__item__active : ""
              }`}
              role="none"
              onClick={() => updateStepOnClickHandler(1)}>
              {" "}
              Имя автора
              <br /> и название статьи
            </li>
            <li
              className={`${style.menu__item} ${
                step === 2 ? style.menu__item__active : ""
              }`}
              role="none"
              onClick={() => updateStepOnClickHandler(2)}>
              Написать текст статьи
            </li>
            <li
              className={`${style.menu__item} ${
                step === 3 ? style.menu__item__active : ""
              }`}
              role="none"
              onClick={() => updateStepOnClickHandler(3)}>
              Отправить статью
            </li>
          </ul>
        </div>
        <ToggleTheme 
        theme={theme}
        changeTheme={changeTheme}/>
      </div>
    </div>
  );
};
