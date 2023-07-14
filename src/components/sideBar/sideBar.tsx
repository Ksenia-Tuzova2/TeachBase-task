import { Button } from '../../shared/button/button'
import { Logo } from '../../shared/logo/logo'
import style from './sideBar.module.css'

type SidebarPropsType = {

}

export const Sidebar: React.FC<SidebarPropsType> = (
    {

    }
) => {
    return (
        <div className={style.sidebar}>
             <div className={style.sidebar__container}>
                <Logo/>
                <Button buttonName={'Cоздать статью'} 
                onClickHandler={undefined}/>
            <ul className={style.menu}>
                <li className={style.menu__item}
                 role="none"
                 >Имя автора <br/> и название статьи</li>
                <li className={style.menu__item} 
                role="none">Написать текст статьи</li>
                <li className={style.menu__item} 
                role="none">Отправить статью/<br/>
                создать черновик</li>
            </ul>
            </div>
        </div>
    )
}

