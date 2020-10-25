import React from "react"
import styled from "styled-components"
import iPhone from "../assets/Screen1.png"

const size = {
    normal: "23.75em",
    small: "18.75em"
}

const order = {
    left: "1",
    right: "2"
}

const Image = styled.img`
    display: flex;
    width: ${(props) => size[props.size]};
    justify-content: flex-end;
    padding-top: 40px;
    order: ${(props) => order[props.order]};  
`

export const AppPreview = (props) => (
    <Image size={props.size} src={iPhone} alt="App Preview"/>
)

// TODO make a phone show up animation
