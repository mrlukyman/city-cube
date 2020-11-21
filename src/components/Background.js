import React from "react"
import styled from "styled-components"
import background from "../assets/background.png"

const StyledBackground = styled.img`
    max-width: 100%;
    height: auto;
    position: absolute;
    z-index: -1;
    border-radius: 0 0 40px 40px;
`

export const Background = () => (
    <StyledBackground src={background} alt="background" />
)