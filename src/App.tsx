import React, { useContext } from "react";

import "./null.css";
import { Sidebar } from "./components/sideBar/sideBar";
import { FirstScreen } from "./components/pages/firstScreen/firstScreen";
import { Header } from "./components/header/header";
import { SecondScreen } from "./components/pages/secondScreen/secondScreen";
import { ThirdScreen } from "./components/pages/thirdScreen/thirdScreen";
import { StoreContext } from "./store/contex";
import style from "./App.module.css";

export type AppPropsType = {}

const App: React.FC<AppPropsType> = () => {

  const {state, setState}=useContext(StoreContext);
 
  return(
      <div className={`${state.theme===true?
      style.app__darkTheme:""} ${style.app}`}>
        <div className={style.app__container}>
          <Sidebar />
          <div className={style.app__mainPart}>
            <Header step={state.step} />
            <div className={style.app__screenPart}>
              {state.step===1&&<FirstScreen />}
              {state.step===2&&<SecondScreen/>}
              {state.step===3&&<ThirdScreen/>}
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
