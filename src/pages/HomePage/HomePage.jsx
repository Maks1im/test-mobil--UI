import Header from "../../components/Header.jsx";
import MobileMenu from "../../components/MobilMenu.jsx";
import Video from "../../components/Video-container.jsx";
import SidebarMenuDesktop from "../../components/SidebarMenuDesktop.jsx";

function HomePage() {
    return (
        <>
            <Header/>
            <main className="main-container">
                <SidebarMenuDesktop/>
                <div className={"main-video-container"}>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/><Video/><Video/><Video/><Video/><Video/><Video/><Video/><Video/>
                </div>
            </main>
            <MobileMenu/>
        </>
    )
}

export default HomePage;