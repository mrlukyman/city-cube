import React from "react"
import styled from "styled-components"
import { Heading } from "./common/Heading"
import { Paragraph } from "./common/Paragraph"

const size = {
    small: "30%",
    normal: "80%",
    big: "100%"
}

const Wrapper = styled.div`
    width: ${(props) => size[props.size]};
`


export const ContentText = (props) => (
    <Wrapper size={props.size}>
        <Heading hColor={props.hColor} headingFontSize={props.headingFontSize}>{props.title}</Heading>
        <Paragraph pColor={props.pColor} paragraphFontSize={props.paragraphFontSize}>{props.content}</Paragraph>
    </Wrapper>
)
