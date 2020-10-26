import styled from "styled-components"

const paragraphFontSize = {
    small: "23px",
    big: "27px"
}

const pColor = {
    white: "white",
    black: "#696969"
}

export const Paragraph = styled.p`
    color: ${(props) => pColor[props.pColor]};
    font-size: ${(props) => paragraphFontSize[props.paragraphFontSize]};
    line-height: 1.6;
    font-weight: 400;
`