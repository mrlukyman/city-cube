import styled from "styled-components"

const headingFontSize = {
    big: "55px",
    small: "35px"
}

const hColor = {
    white: "white",
    black: "black"
}

const hPosition = {
    center: "center",
    right: "right",
}

export const Heading = styled.h1`
    text-align: ${(props) => hPosition[props.hPosition]};
    color: ${(props) => hColor[props.hColor]};
    font-weight: 800;
    font-size: ${(props) => headingFontSize[props.headingFontSize]};
`