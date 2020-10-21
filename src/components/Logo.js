import React from "react"
import logo from "../assets/LogoWhite.png"

export const Logo = () => (
    <div className="logo">
        <a href="#">
            <img src={logo} alt="logo" />
        </a>
        <h1>CityCube</h1>
    </div>
)