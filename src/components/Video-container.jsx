function Video () {
    return (
        <div className={"video-container"}>
            <iframe
                className="video"
                src="https://www.youtube.com/embed/f_7Se53EzaA?si=uek-sK2Re7YmV-Yx"
                allowFullScreen
            ></iframe>
            <h3>фильм - социальная сеть</h3>
            <p>аккаунт</p>
            <p>1,8 млн просмторов</p>
        </div>
    )
}

export default Video;