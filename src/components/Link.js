import React from "react"
import styled from "styled-components"

const StyledLink = styled.a`
    color: #ffffff;
    text-decoration: none;
    font-size: 25px;
    /* text-shadow: 0 0 10px black; */
    font-weight: 500;

`

export const Link = (props) => (
    <StyledLink href={props.section}>{props.label}</StyledLink>
)