import Header from "../../components/layout/Header.jsx";
import SidebarMenuDesktop from "../../components/SidebarMenuDesktop.jsx";
import MobilMenu from "../../components/MobilMenu.jsx";

function AccountPage() {
    return (
        <>
            <Header/>
            <main className="main-account">
                <SidebarMenuDesktop/>
                <div className={"user-mobile"}>
                    <header className={"header-user"}>
                        <div className={"user-main"}>
                            <button className={"user-button"}></button>
                            <div className={"user-info"}>
                                <h1 className={"user-name"}>User</h1>
                                <p>0 подписчиков</p>
                            </div>
                        </div>
                    </header>
                    <hr/>
                </div>
                <div className={"user-desktop"}>
                    <header className={"header-user"}>
                            <button className={"user-button"}></button>
                            <div className={"user-info"}>
                                <h1 className={"user-name"}>User</h1>
                                <p>0 подписчиков</p>
                            </div>
                    </header>
                    <hr/>
                </div>
            </main>
            <MobilMenu/>
        </>
    )
}

export default AccountPage;