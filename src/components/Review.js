import React from "react"
import Content from '../data/Content'
import "../index.css"

export const Review = (props) => (
    <div>
    {Content.review.map((contentDetail) => {
        return <div>
            <p>{contentDetail.content}</p>
            <h3>{contentDetail.name}</h3>
        </div>
    })}
    </div>
)

