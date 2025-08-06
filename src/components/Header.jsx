import {NavLink} from "react-router-dom";
import SidebarMenuMobil from "./SidebarMenuMobil.jsx";
import {useState} from "react";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className={"header"}>
            <div className={"header__mobil"}>
                <div className={"header__menu__logo"}>
                    <button onClick={() => setIsOpen(!isOpen)} className={"menuBurder"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <NavLink className={"link__logo"} to={"/"}>OK</NavLink>
                </div>
                <form className={"header__mobil-form"}>
                    <div className={"group"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" fill="currentColor" className="search__icon"
                             viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <input className={"grop__input"} placeholder={"Поиск"}/>
                    </div>
                </form>
                {isOpen && (<SidebarMenuMobil/>)}
            </div>
        </header>
    )
}

export default Header;