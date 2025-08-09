import {Link} from "react-router-dom";
import {useState} from "react";

function Video () {
    const [views, setviews] = useState(0);
    function viewsF(){
        setviews(prevViews => prevViews + 1)
    }

    return (
        <div className={"video-container"}>
            <iframe
                className="video"
                src=""
                allowFullScreen
            ></iframe>
            <h3>фильм - социальная сеть</h3>
            <Link to={"/user"}>аккаунт</Link>
            <p>{views} просмотров</p>
        </div>
    )
}

export default Video;