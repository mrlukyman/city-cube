import React from "react"
import { Link } from "./Link"

export const Navbar = () => (
    <nav className="navbar">
        <Link section="Home" label="Home"/>
        <Link section="Features" label="Features"/>
        <Link section="Download" label="Download"/>
        <Link section="AbousUs" label="Abous Us"/>
    </nav>
)