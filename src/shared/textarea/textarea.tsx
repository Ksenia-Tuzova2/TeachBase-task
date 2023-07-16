import style from './textarea.module.css'

type TextareaPropsType = {
    textareaValue: string,
    textareaName: string,
    placeholder: string,
    textareaValueChangeHandler: (text:string)=>void,
}

export const Textarea: React.FC<TextareaPropsType> = (
    {
        textareaValue,
        textareaName,
        placeholder,
        textareaValueChangeHandler,
    }
) => {
    return (
        <textarea
            className={style.textarea}
            name={textareaName}
            placeholder={placeholder}
            value={textareaValue}
            onChange={(e) => textareaValueChangeHandler(e.currentTarget.value)}
        />
    )
}

