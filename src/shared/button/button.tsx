import btnStyle from './button.module.css'

type ButtonPropsType = {
    buttonName: string,
    onClickHandler: any
}

export const Button: React.FC<ButtonPropsType> = (
    { buttonName,
        onClickHandler
    }
) => {
    return (
//как задать цвета в условном ветвлвелнии?
        <button
            className={btnStyle.btn}
            name={buttonName}
            onClick={() => onClickHandler}
        >
            {buttonName}
        </button>

    )
}

