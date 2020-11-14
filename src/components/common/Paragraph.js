import styled from "styled-components"

const paragraphFontSize = {
    extrasmall: "19px",
    small: "23px",
    big: "27px"
}

const pColor = {
    white: "white",
    black: "#696969"
}

const pPosition = {
    center: "center",
    left: "left"
}

export const Paragraph = styled.p`
    color: ${(props) => pColor[props.pColor]};
    font-size: ${(props) => paragraphFontSize[props.paragraphFontSize]};
    text-align: ${(props) => pPosition[props.pPosition]};
    line-height: 1.6;
    font-weight: 400;
`