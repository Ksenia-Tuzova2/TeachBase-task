import style from './sideBar.module.css'

type SidebarPropsType = {

}

export const Sidebar: React.FC<SidebarPropsType> = (
    {

    }
) => {
    return (
        <div className={style.sidebar__container}>
             <div className={style.sidebar}>
            <ul className={style.menu}>
                <li className={style.menu__item} role="none">Имя автора и название статьи</li>
                <li className={style.menu__item} role="none">Статья</li>
                <li className={style.menu__item} role="none">Отправить</li>
            </ul>
            </div>
        </div>
    )
}

