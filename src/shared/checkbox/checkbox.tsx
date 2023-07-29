import style from './checkbox.module.css'

type CheckboxPropsType = {
    onClickHadler: (checked:boolean) => void
    id: string,
    name: string,
    labelTitle: string,
    labelFor: string,
    checked: boolean,
    colorLabel: string,
}

export const Checkbox: React.FC<CheckboxPropsType> = (
    {
        id,
        name,
        labelTitle,
        labelFor,
        checked,
        colorLabel,
        onClickHadler,
    }
) => {

    return (
        <div className={style.checkbox}>
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={(e)=>onClickHadler((e.currentTarget.checked))}
                className={style.checkbox__item}
                value={labelFor}
            />
            <label
                htmlFor={labelFor}
                className={style.lablel}
                style={{ color: colorLabel }}>
                {labelTitle}
            </label>
        </div>
    )
}

