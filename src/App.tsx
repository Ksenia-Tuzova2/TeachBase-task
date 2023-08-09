import "./null.css";
import { useReducer } from "react";

import { Sidebar } from "./components/sideBar/sideBar";
import { FirstScreen } from "./components/pages/firstScreen/firstScreen";
import { Header } from "./components/header/header";
import { SecondScreen } from "./components/pages/secondScreen/secondScreen";
import { ThirdScreen } from "./components/pages/thirdScreen/thirdScreen";

import style from "./App.module.css";
import { IsDraftType, initialState } from "./store/state";
import { ChangeThemeAC, SendIsDraftAC, SendTextAC, SendTitleAC, 
  UpdateAuthorAC, 
  UpdateStepAC, 
  reducer } from "./store/reducer";

export type AppPropsType = {}

export const App: React.FC<AppPropsType> = () => {

  const [state, dispatch]=useReducer(reducer, initialState);

  function sendText(text:string){
    dispatch(SendTextAC(text));
  }

  function updateStep(step:number){
    dispatch(UpdateStepAC(step));
  }

  function updateAuthor(author:string){
    dispatch(UpdateAuthorAC(author));
  }

  function sendIsDraft(isDraft: IsDraftType){
    dispatch(SendIsDraftAC(isDraft));
  }

  function sendTitle(title: string){
    dispatch(SendTitleAC(title));
  }

  function changeTheme(theme:boolean){
    dispatch(ChangeThemeAC(theme));
  }


  return(
      <div className={`${state.theme===true?
      style.app__darkTheme:""} ${style.app}`}>
        <div className={style.app__container}>
          <Sidebar
          changeTheme={changeTheme}
          theme={state.theme}
           updateStep={updateStep}
           step={state.step}/>
          <div className={style.app__mainPart}>
            <Header step={state.step} />
            <div className={style.app__screenPart}>
              {state.step===1&&<FirstScreen 
              state={state}
              updateAuthor={updateAuthor}
               sendTitle={sendTitle}
               updateStep={updateStep}
               />}
              {state.step===2&&<SecondScreen 
            
              sendText={sendText}
              updateStep={updateStep}/>}
              {state.step===3&&<ThirdScreen 
            
              updateStep={updateStep}
              sendIsDraft={sendIsDraft}
              isDraft={state.isDraft} 
              theme={state.theme}/>}
            </div>
          </div>
        </div>
      </div>
  );
};
