import React from "react"
import Content from '../data/Download.json'
import "../index.css"

export const Download = (props) => (
    <div>
    {Content.map((contentDetail, index) => {
        return <div>
            <p>{contentDetail.content}</p>
            <h3>{contentDetail.title}</h3>
        </div>
    })}
    </div>
)
