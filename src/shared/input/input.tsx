import style from './input.module.scss'

type InputPropsType = {
    inputValue: string,
    inputName: string,
    placeholder:string,
    inputValueChangeHandler: any,
    tabIndex:number,
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
        <input
            className={style.input}
            type="text"
            name={inputName}
            placeholder={placeholder}
            value={inputValue}
            tabIndex={tabIndex}
            onChange={(e) => inputValueChangeHandler(e.currentTarget.value)}
        />
    )
}

