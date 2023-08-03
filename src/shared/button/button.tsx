import style from "./button.module.css";
import mesSvg from "./icons/mes.svg";

type ButtonPropsType = {
  buttonName: string;
  onClickHandler: () => void;
  background?: string;
  smallFont?: boolean;
  mesIcon?: boolean;
};

export const Button: React.FC<ButtonPropsType> = ({
  buttonName,
  onClickHandler,
  background = "#65C497",
  smallFont = false,
  mesIcon = false,
}) => {
  const messageIcon = mesIcon ? (
    <img className={style.button__icon} src={mesSvg} alt="" />
  ) : (
    ""
  );

  return (
    <button
      className={`${style.button} ${smallFont ? style.smallFont : ""}`}
      name={buttonName}
      onClick={() => onClickHandler()}
      style={{ background: background }}>
      {messageIcon}
      <span>{buttonName}</span>
    </button>
  );
};
