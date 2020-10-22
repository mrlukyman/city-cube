import React from "react"
import AppStore from "../assets/app-store.png"
import GooglePlay from "../assets/google-play.png"

export const Icons = () => (
    <div className="icons">
        <img src={GooglePlay} alt="google-play"/>
        <img src={AppStore} alt="app-store"/>
    </div>
)