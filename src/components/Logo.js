import React from "react"
import styled from "styled-components"
import logo from "../assets/LogoWhite.png"

const Wrapper = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: row;
`

const StyledLogo = styled.img`
    max-width: 50px;
    height: auto;
`
const WhiteHeading = styled.h3`
    color: white;
    font-size: 25px;
    font-weight: 700;
`

export const Logo = () => (
    <Wrapper>
        <a href="#">
            <StyledLogo src={logo} alt="logo" />
        </a>
        <WhiteHeading>CityCube</WhiteHeading>
    </Wrapper>
)