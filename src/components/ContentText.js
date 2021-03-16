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
    max-width: ${(props) => size[props.size]};

    @media screen and (max-width: 960px) {
        max-width: 400px;
        padding: 0 12px;
    }
`


export const ContentText = (props) => (
    <Wrapper size={props.size}>
        <Heading hPosition={props.hPosition} hColor={props.hColor} headingFontSize={props.headingFontSize}>{props.title}</Heading>
        <Paragraph pPosition={props.pPosition} pColor={props.pColor} paragraphFontSize={props.paragraphFontSize}>{props.content}</Paragraph>
    </Wrapper>
)
