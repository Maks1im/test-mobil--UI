import {Link} from 'react-router-dom'

function MenuOther () {
    return (
        <div className={"other"}>
            <nav className={"navbar-nav"}>
                <ul className={"navbar-nav__list"}>
                    <li className={"navbar-nav__item"}><a href={"https://t.me/Maxsc11"}>Помощь</a></li>
                    <li className={"navbar-nav__item"}><a href={""}>Поддержать авторов</a></li>
                    <li className={"navbar-nav__item"}><Link to={"/about"}>О нас</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuOther