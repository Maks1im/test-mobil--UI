import Header from "../../components/layout/Header.jsx";
import SidebarMenuDesktop from "../../components/SidebarMenuDesktop.jsx";
import MobilMenu from "../../components/MobilMenu.jsx";

function Recommendations (){
    return (
        <>
            <Header/>
            <main className="main-recommendations">
                <SidebarMenuDesktop/>
                <div className={"main-video-container"}></div>
            </main>
            <MobilMenu/>
        </>
    )
}

export default Recommendations