
import { Button } from "../../../shared/button/button";
import { Input } from "../../../shared/input/input";
import { StateType } from "../../../store/state";

import style from "./firstScreen.module.css";

type FirstScreenPropsType = {
  state: StateType;
  sendTitle: (title: string) => void;
  updateAuthor: (author: string) => void;
  updateStep: (step: number) => void;
};

export const FirstScreen: React.FC<FirstScreenPropsType> = ({
  state,
  sendTitle,
  updateAuthor,
  updateStep,
}) => {
  const upateAuthorsName = (author: string) => {
    updateAuthor(author);
  };

  const updateTitle = (title: string) => {
    sendTitle(title);
  };

  const clickButtonHandler = () => {
    updateStep(2);
  };

  return (
    <div className={style.firstScreen}>
      <div className={style.firstScreen__item}>
        <Input
          label={"Имя автора"}
          inputName={"author`s name"}
          placeholder={"Имя автора"}
          tabIndex={1}
          colorLabel={`${state.theme ? "white" : "black"}`}
          addItem={upateAuthorsName}
        />
      </div>
      <div className={style.firstScreen__item}>
        <Input
          colorLabel={`${state.theme ? "white" : "black"}`}
          label={"Название статьи"}
          inputName={"article title"}
          placeholder={"Название статьи"}
          tabIndex={2}
          addItem={updateTitle}
        />
      </div>
      <div className={style.firstScreen__item}>
        <Button
          buttonName={"Далее"}
          onClickHandler={() => clickButtonHandler()}
        />
      </div>
    </div>
  );
};
