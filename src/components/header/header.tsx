import { StepType } from '../../store/state'
import style from './header.module.css'


type HeaderPropsType = {
  step: StepType,
}

export const Header: React.FC<HeaderPropsType> = (
  { step=1 }) => {

  return (
    <header className={style.header}>
      <div className={style.header__progressBar}></div>
      <div className={style.header__step}>
        ШАГ
        <span className={style.header__number}>
         { ` ${step}`}
        </span>
      </div>
    </header>

  )
}
