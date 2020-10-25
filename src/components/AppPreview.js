import React from "react"
import styled from "styled-components"
import iPhone from "../assets/Screen1.png"

const size = {
    normal: "23.75em",
    small: "18.75em"
}

const Image = styled.img`
    display: flex;
    width: ${(props) => size[props.size]};
    justify-content: flex-end;
    padding-top: 40px; 
`

export const AppPreview = (props) => (
    <Image size={props.size} src={iPhone} alt="App Preview"/>
)

// TODO make a phone show up animation
