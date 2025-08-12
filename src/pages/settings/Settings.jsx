import Header from "../../components/layout/Header.jsx";
import SidebarMenuDesktop from "../../components/SidebarMenuDesktop.jsx";
import MobilMenu from "../../components/MobilMenu.jsx";
import {useState} from "react";

function Settings() {
    const [userData, setUserData] = useState({
        name: "",
        password: "",
        email: "dscsdcds",
        id: ""
    });
    const handleChange = (field, value) => {
        setUserData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return(
        <>
            <Header />
            <div className={"main__settings__container"}>
                <SidebarMenuDesktop />
                <div className={"settings"}>
                    <h1>Настройки</h1>
                    <nav className={"navbar__settings"}>
                        <ul className={"menu__list__settings"}>
                            <li className={"menu__item"}>Имя <input value={userData.name}/><button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor"
                                         className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                    </svg>
                                </button></li>
                            <li className={"menu__item"}>Пороль<input value={userData.password}/><button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor"
                                         className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                    </svg>
                                </button></li>
                            <li className={"menu__item"}>email <input value={userData.email}/><button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                                        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
                                    </svg>
                                </button></li>
                            <li className={"menu__item"}>id <input value={userData.id}/> </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <MobilMenu/>
        </>
    )
}

export default Settings;