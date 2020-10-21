import React from "react"
import background from "../assets/background.png"

export const Background = () => (
    <img src={background} alt="background"
    style={{
        width:"100%", 
        height:"100", 
        position:"absolute", 
        zIndex:"0", 
        borderRadius:"0 0 40px 40px"}} 
    />
)