import React from "react"
import Content from '../data/Content.json'
import "../index.css"
import { AppPreview } from "./AppPreview"

export const Features = (props) => (
    <div className="container features">
        <AppPreview />
    {Content.map((contentDetail, index) => {
        return <div>
            <h1>{contentDetail.title}</h1>
            <p>{contentDetail.content}</p>
        </div>
    })}
    </div>
)

export default Features