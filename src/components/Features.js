import React from "react"
import Content from '../data/Content.json'
import iPhone from "../assets/iPhone.png"
import "../index.css"

export const Features = (props) => (
    <div>
    {Content.map((contentDetail, index) => {
        return <div>
            <img className="app_preview container" src={iPhone} alt="app-preview"/>
            <h1>{contentDetail.title}</h1>
            <p>{contentDetail.content}</p>
        </div>
    })}
    </div>
)

export default Features