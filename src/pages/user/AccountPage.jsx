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
                                <img className={"user-image"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfGHkeCLGjmS7un5J8V8_C9Mh6cyKyDvI8Q&s"} alt={"dcd"}/>                            <div className={"user-info"}>
                                <h1 className={"user-name"}>User</h1>
                                <p>0 подписчиков</p>
                            </div>
                        </div>
                    </header>
                    <hr/>
                </div>
                <div className={"user-desktop"}>
                    <header className={"header-user"}>
                        <img className={"user-image"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfGHkeCLGjmS7un5J8V8_C9Mh6cyKyDvI8Q&s"} alt={"dcd"}/>
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