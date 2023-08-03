import { TextType } from "../../store/state";

import style from "./input.module.css";

type InputPropsType = {
    label: string,
    inputValue: string,
    inputName: string,
    placeholder: string,
    inputValueChangeHandler: (text: TextType) => void,
    tabIndex: number,
    colorLabel: string,
}

export const Input: React.FC<InputPropsType> = (
    {
        colorLabel,
        label,
        inputValue,
        inputName,
        placeholder,
        inputValueChangeHandler,
        tabIndex,
    },
) => {
    return (
        <div className={style.input}>
            <div className={style.input__label}
                style={{ color: colorLabel }}>
                {label}
            </div>
            <input
                className={style.input__item}
                type="text"
                name={inputName}
                placeholder={placeholder}
                value={inputValue}
                tabIndex={tabIndex}
                onChange={(e) => inputValueChangeHandler(e.currentTarget.value)}
            />
        </div>
    );
};

