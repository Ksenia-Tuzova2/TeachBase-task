import style from './textarea.module.scss'

type TextareaPropsType = {
    textareaValue: string,
    textareaName: string,
    placeholder:string,
    textareaValueChangeHandler: any
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

