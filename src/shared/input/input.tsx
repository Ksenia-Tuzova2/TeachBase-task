import style from './input.module.css'

type InputPropsType = {
    inputValue: string,
    inputName: string,
    placeholder: string,
    inputValueChangeHandler: any,
    tabIndex: number,
}

export const Input: React.FC<InputPropsType> = (
    {
        inputValue,
        inputName,
        placeholder,
        inputValueChangeHandler,
        tabIndex,
    }
) => {
    return (
        <div className={style.input}>
            <div className={style.input__name}>{inputName}</div>
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
    )
}

