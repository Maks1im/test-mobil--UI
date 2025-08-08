import {Link} from "react-router-dom";

function Video () {
    return (
        <div className={"video-container"}>
            <iframe
                className="video"
                src=""
                allowFullScreen
            ></iframe>
            <h3>фильм - социальная сеть</h3>
            <Link to={"/"}>аккаунт</Link>
            <p>1,8 млн просмторов</p>
        </div>
    )
}

export default Video;