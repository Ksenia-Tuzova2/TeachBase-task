import svg from "./logoIcon/logo.svg";
import style from "./logo.module.css";


export const Logo: React.FC = ()=>{
    return (
        <div className={style.logo}>
        <img className={style.logo__img} src={svg} alt='#'></img>
    </div>
    );
};

