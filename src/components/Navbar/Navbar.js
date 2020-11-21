import React, {useState} from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from 'react-router-dom'
import LogoImage from "../../assets/LogoWhite.png"
import { 
    Nav, 
    NavbarWrapper, 
    NavLogo, 
    Logo, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements'


const Navbar = () => {
    const[isClicked, setIsClicked] = useState(false)

    const handleClick = () => setIsClicked(!isClicked)

    return (
        <NavbarWrapper>
            <NavLogo to="/">
                <Logo src={LogoImage}/> 
                CityCube
            </NavLogo>
            <MobileIcon onClick={handleClick}>
            {isClicked ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} isClicked={isClicked}>
                <NavItem>
                    <NavLinks to="/">
                        Features
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/">
                        Motivation
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/">
                        Reviews
                    </NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="/">
                        About
                    </NavLinks>
                </NavItem>
            </NavMenu>
        </NavbarWrapper>
    )
}

export default Navbar
