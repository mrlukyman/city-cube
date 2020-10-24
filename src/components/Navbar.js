import React from "react"
import styled from "styled-components"
import { Link } from "./Link"

const border = {
    border: "3px solid orange",
    borderRadius: "3px"
}

const Wrapper = styled.nav`
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 40%;
    justify-content: space-between;
`

export const Navbar = () => (
    <Wrapper>
        <Link section="Home" label="Home"/>
        <Link section="Features" label="Features"/>
        <Link style={border} section="Download" label="Download"/>
        <Link section="AbousUs" label="Abous Us"/>
    </Wrapper>
)