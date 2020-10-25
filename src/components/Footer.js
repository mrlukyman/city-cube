import React from "react"
import Content from '../data/Content.json'
import "../index.css"

export const Footer = (props) => (
    <div>
    {Content.map((contentDetail, index) => {
        return <div>
            <h1>{contentDetail.title}</h1>
            <p>{contentDetail.content}</p>
        </div>
    })}
    </div>
)
