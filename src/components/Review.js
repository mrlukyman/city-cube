import React from "react"
import Content from '../data/Review.json'
import "../index.css"

export const Review = (props) => (
    <div>
    {Content.map((contentDetail, index) => {
        return <div>
            <p>{contentDetail.content}</p>
            <h3>{contentDetail.title}</h3>
        </div>
    })}
    </div>
)

export default Review