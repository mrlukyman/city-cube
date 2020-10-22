import React from "react"
import Content from '../data/Subscribe.json'
import "../index.css"

export const Subscribe = (props) => (
    <div>
    {Content.map((contentDetail, index) => {
        return <div>
            <h2>{contentDetail.title}</h2>
            <p>{contentDetail.content}</p>
        </div>
    })}
    </div>
)

export default Subscribe