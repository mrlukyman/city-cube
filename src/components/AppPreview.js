import React from "react"
import styled from "styled-components"
import Screen1 from "../assets/Screen1.png"
import Screen2 from "../assets/Screen2.png"
import Screen3 from "../assets/Screen3.png"

const screen = {
    screen1: Screen1,
    screen2: Screen2,
    screen3: Screen3
}

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
    <Image size={props.size} src={screen[props.screen]} alt="App Preview"/>
)

// TODO make a phone show up animation
