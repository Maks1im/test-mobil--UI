import {NavLink} from "react-router-dom"

function SidebarMenuMobil() {
    return (
        <nav className={"sidebar__menu"}>
            <ul className={"menu__menu__list"}>
                <li className={"menu__menu__list-item"}><NavLink to={"/recommendations"}>Рекомендации</NavLink></li>
            </ul>
        </nav>
    )
}

export default SidebarMenuMobil;