import { StateType } from "../../store/state";

import style from "./toggleTheme.module.css";
import sun from "./icons/ph_sun.svg";
import moon from "./icons/solar_moon-line-duotone.svg";
import on from "./icons/uit_toggle-on-1.svg";
import off from "./icons/uit_toggle-off.svg";

type ToggleThemePropsType = {
    changeTheme:(theme:boolean)=>void;
    theme:boolean
}

export const ToggleTheme: React.FC<ToggleThemePropsType> = (
    {changeTheme, theme},
) => {

    const onClickHandler = () => {
        changeTheme(!theme);
    };

    return (
        <div className={style.toggleTheme}>
            <img src={sun} alt="" />
            <div className={style.toggleTheme__switchContainer}
                onClick={() => onClickHandler()}>
                {theme ?
                    <img src={on} alt="" /> :
                    <img src={off} alt="" /> }
            </div>
            <img src={moon} alt="" />
        </div>
    );
};

