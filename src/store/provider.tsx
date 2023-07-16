import { useState,  FC, ReactNode } from "react"
import { StoreContext } from "./contex"
import { StateType, initialState } from "./state"

type StoreProviderProps = {
    children: ReactNode
}

export const StoreProvider :FC<StoreProviderProps>= ({ children }) => {

    const [state, setState] = useState<StateType>(initialState)
    const defaultProps = { state,  setState}

    return (
        <StoreContext.Provider value={defaultProps}>
            {children}
        </StoreContext.Provider>
    )
}