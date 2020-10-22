import React from "react"
import Content from '../data/Feature.json'
import iPhone from "../assets/iPhone.png"
import "../index.css"

export const Features = () => (
    <div>
    {Content.map((contentDetail, index) => {
        return <div>
            <img className="app_preview container" src={iPhone} alt="app-preview"/>
            <h2>{contentDetail.title}</h2>
            <p>{contentDetail.content}</p>
        </div>
    })}
    </div>
)

export default Features