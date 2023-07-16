import { createContext } from "react";
import { StateType } from "./state";


export type StoreContextType = {
    state: StateType,
    setState: (newState: StateType) => void
  }

export const StoreContext = createContext<StoreContextType>({} as StoreContextType)


