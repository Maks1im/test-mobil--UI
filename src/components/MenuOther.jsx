import {Link} from 'react-router-dom'

function MenuOther () {
    return (
        <div className={"other"}>
            <nav className={"navbar-nav"}>
                <ul className={"navbar-nav__list"}>
                    <li className={"navbar-nav__item"}><Link to={"help"}>Помощь</Link></li>
                    <li className={"navbar-nav__item"}><Link to={""}>Поддержать авторов</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default MenuOther