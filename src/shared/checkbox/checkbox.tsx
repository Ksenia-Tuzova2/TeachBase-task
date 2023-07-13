import style from './checkbox.module.css'

type CheckboxPropsType = {
    id: string,
    name: string,
    value: string,
    labelTitle: string,
    labelFor: string,
    checked:boolean,
}

export const Checkbox: React.FC<CheckboxPropsType> = (
    {
        id,
        name,
        value,
        labelTitle,
        labelFor,
        checked,
    }
) => {
    return (
        <div className="checkbox__container">
            <input 
                type="checkbox"
                id={id}
                name={name}
                value={value}
                checked={checked||true}
            />
            <label htmlFor={labelFor}>{labelTitle}</label>
        </div>
    )
}

