import { Link, useNavigate } from "react-router-dom";

function Video() {
    return (
        <Link to="/watch" className="video-link">
            <div className={"video-container"}>
                <iframe
                    className="video"
                    src=""
                    allowFullScreen
                ></iframe>
                <h3>фильм - социальная сеть</h3>
                <Link className={"link__to__user"} to={"/user"}>аккаунт</Link>
                <p>0 просмотров</p>
            </div>
        </Link>
    );
}

export default Video;