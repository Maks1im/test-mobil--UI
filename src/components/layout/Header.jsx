import {Link, NavLink} from "react-router-dom";
import SidebarMenuMobil from "../modal/SidebarMenuMobil.jsx";
import {useState} from "react";
import MenuOther from "../modal/MenuOther.jsx";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOther, setIsOther] = useState(false);

    return (
        <header className={"header"}>
            {/*mobil version*/}
            <div className={"header__mobil"}>
                <div className={"header__menu__logo"}>
                    <button onClick={() => setIsOpen(!isOpen)} className={"menuBurder"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                        </svg>
                    </button>
                    <NavLink className={"link__logo"} to={"/"}>OK</NavLink>
                    <button onClick={() => setIsOther(!isOther)} className={"menuOther"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30"  fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                    </button>
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
                {isOther && (<MenuOther/>)}
            </div>
            {/*desktop version*/}
            <div className={"header__desktop"}>
                <Link className={"link__logo-desktop"} to={"/"}>Ok</Link>
                <form className={"form__search"}>
                    <div className={"group-desktop"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="search__icon-desktop" viewBox="0 0 16 16">
                            <path
                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <input placeholder={"Поиск"} type={"search"} className={"grop__input-desktop"}/>
                    </div>
                </form>
                <div className={"add-div"}>
                    <NavLink to={"/add"} className={"add"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
                        </svg>
                        Добавить
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;