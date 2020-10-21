import React from "react"
import logo from "../assets/LogoWhite.png"
import "../index.css"

export const Logo = () => (
    <div className="logo">
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
        <h1>CityCube</h1>
    </div>
)