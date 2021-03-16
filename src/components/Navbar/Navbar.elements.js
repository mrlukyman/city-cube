import styled from "styled-components"
import { Link } from "react-router-dom"
import { Container } from "../common/GlobalStyles"

export const NavbarWrapper = styled.div`
    height: 80px;
    flex: 1;
    max-width: 1300px;
    display: flex;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
    color: white;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 960px) {
        align-items: center;
        padding: 0 12px;
    }
`

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    flex-direction: row;
    display: flex;
    align-items: center;
    font-weight: 700;
`

export const Logo = styled.img`
    height: 60px;
    margin-right: 1rem;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    list-style: none;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100vh; // TODO: figure out a way to do this properly
        position: absolute;
        top: 80px;
        left: ${({isClicked}) => (isClicked ? 0 : "-100%")};
        opacity: 1;
        transition: all 0.5s ease;
        background: #141414;
    }
`

export const NavItem = styled.li`

    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        height: 80px;
        width: 100%;
        text-align: center;
        
        &:hover {
            border: none;
        }
    }
`

export const  NavLinks = styled(Link)`
    color: #fff;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        // width: 100%;
        // display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3s ease;
        }

    }
`