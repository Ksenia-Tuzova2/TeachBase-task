import style from './toggleTheme.module.css'
import sun from './icons/ph_sun.svg'
import moon from './icons/solar_moon-line-duotone.svg'
import on from './icons/uit_toggle-on-1.svg'
import off from './icons/uit_toggle-off.svg'
import { StoreContext } from '../../store/contex'
import { useContext } from 'react'
import { StateType } from '../../store/state'

type ToggleThemePropsType = {}

export const ToggleTheme: React.FC<ToggleThemePropsType> = () => {

    const { state, setState } = useContext(StoreContext)

    let onClickHandler = () => {
        const newState = { theme: !state.theme } as StateType
        setState({ ...state, ...newState })
    }

    return (
        <div className={style.toggleTheme}>
            <img src={sun} alt="" />
            <div className={style.toggleTheme__switchContainer}
                onClick={() => onClickHandler()}>
                {state.theme ?
                    <img src={on} alt="" /> :
                    <img src={off} alt="" /> }
            </div>
            <img src={moon} alt="" />
        </div>
    )
}

