import { useState } from "react";

import { TextType } from "../../store/state";

import style from "./input.module.css";

type InputPropsType = {
    label: string,
    addItem: (text:string)=>void,
    inputName: string,
    placeholder: string,
    tabIndex: number,
    colorLabel: string,
}

export const Input: React.FC<InputPropsType> = (
    {
        colorLabel,
        label,
        addItem,
        inputName,
        placeholder,
        tabIndex,
    },
) => {

    const [inputValue, setInputValue] = useState("");
 
    
    return (
        <div className={style.input}>
            <div className={style.input__label}
                style={{ color: colorLabel }}>
                {label}
            </div>
            <input
            onBlur={()=>addItem(inputValue)}
                className={style.input__item}
                type="text"
                name={inputName}
                placeholder={placeholder}
                value={inputValue}
                tabIndex={tabIndex}
                onChange={(e) => setInputValue(e.currentTarget.value)}
            />
        </div>
    );
};

