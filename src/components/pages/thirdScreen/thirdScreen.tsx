import { Button } from "../../../shared/button/button";
import { Checkbox } from "../../../shared/checkbox/checkbox";

import { IsDraftType} from "../../../store/state";

import style from "./thirdScreen.module.css";

type ThirdScreenPropsType={
  isDraft:IsDraftType,
  theme:boolean,
  sendIsDraft:(isDraft: IsDraftType)=>void,
  updateStep:(step:number)=>void
}

export const ThirdScreen: React.FC<ThirdScreenPropsType> = (
  {sendIsDraft,theme, isDraft,updateStep},
)=> {


  const onClickCheckboxhandler = (isDraft:IsDraftType) => {
    sendIsDraft(isDraft);
  };

  const onClickButtonHandler = () => {
    updateStep(1);
  };


  return (
    <div className={style.thirdScreen}>
      <div className={style.thirdScreen__container}>
        <div className={style.thirdScreen__checkbox}>
          <Checkbox
            colorLabel={`${theme ? "white" : "black"}`}
            id={"1"}
            name={"isDraft"}
            labelTitle={"Черновик"}
            labelFor={"draft"}
            checked={isDraft}
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
};