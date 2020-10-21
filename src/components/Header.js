import React from "react"
import { Logo } from "./Logo"
import { Navbar} from "./Navbar"
 
export const Header = () => (
    <header className="container header">
        <Logo />
        <Navbar />
    </header>
)