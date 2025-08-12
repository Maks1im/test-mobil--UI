import Header from "../../components/layout/Header.jsx";
import SidebarMenuDesktop from "../../components/SidebarMenuDesktop.jsx";
import {useState} from "react";
import MobilMenu from "../../components/MobilMenu.jsx";
import Video from "../../components/Video-container.jsx";

function UsersAccount () {
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [subscribers, setSubscribers] = useState(0);

    function toggleSubscribe() {
        if (isSubscribed) {
            setSubscribers(prev => prev - 1);
        } else {
            setSubscribers(prev => prev + 1);
        }
        setIsSubscribed(!isSubscribed);
    }

    return (
        <>
            <Header/>
            <main className="main-account">
                <SidebarMenuDesktop/>
                <div className={"user-mobile"}>
                    <header className={"header-user"}>
                        <div className={"user-main"}>
                            <img className={"user-image"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Y3iSpcthhC3YArWBTB127frG2JyPLIcwnw&s"} alt={"dcd"}/>
                            <div className={"user-info"}>
                                <h1 className={"user-name"}>User</h1>
                                <p>{subscribers} подписчиков</p>
                            </div>
                        </div>
                        <div className={"user-sub"}>
                            {isSubscribed ? (
                                <button onClick={toggleSubscribe} className={"sub-button"}>
                                    вы подписаны
                                </button>
                            ) : (
                                <button onClick={toggleSubscribe} className={"sub-button"}>
                                    подписаться
                                </button>
                            )}
                        </div>
                    </header>
                    <hr/>
                </div>
                <div className={"user-desktop"}>
                    <header className={"header-user"}>
                            <img className={"user-image"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7Y3iSpcthhC3YArWBTB127frG2JyPLIcwnw&s"} alt={"dcd"}/>
                            <div className={"user-info"}>
                                <h1 className={"user-name"}>User</h1>
                                <p>{subscribers} подписчиков</p>
                            </div>
                        {isSubscribed ? (
                            <button onClick={toggleSubscribe} className={"sub-button"}>
                                вы подписаны
                            </button>
                        ) : (
                            <button onClick={toggleSubscribe} className={"sub-button"}>
                                подписаться
                            </button>
                        )}
                    </header>
                    <hr/>
                </div>
            </main>
            <MobilMenu/>
        </>
    )
}

export default UsersAccount;