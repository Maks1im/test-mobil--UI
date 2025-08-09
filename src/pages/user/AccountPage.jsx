import Header from "../../components/layout/Header.jsx";
import SidebarMenuDesktop from "../../components/SidebarMenuDesktop.jsx";
import MobilMenu from "../../components/MobilMenu.jsx";

function accountPage () {
    return (
        <>
            <Header/>
            <main className="main-account">
                <SidebarMenuDesktop/>
                <div className={"user-mobile"}>
                    <header className={"header-user"}>
                        <button className={"user-button"}></button>
                        <div className={"user-info"}>
                            <h1 className={"user-name"}>User</h1>
                            <p>0 подпсчиков</p>
                        </div>
                    </header>
                    <hr/>
                </div>
                <div className={"user-desktop"}>
                    <header className={"header-user"}>
                        <button className={"user-button"}></button>
                        <div className={"user-info"}>
                            <h1 className={"user-name"}>User</h1>
                            <p>0 подпсчиков</p>
                        </div>
                    </header>
                    <hr/>
                </div>
            </main>
            <MobilMenu/>
        </>
    )
}

export default accountPage