import React from "react"
import styled from "styled-components"
import { SmallerHeading } from "./common/SmallerHeading"
import { Paragraph } from "./common/Paragraph"

const Wrapper = styled.div`
    width: 30%;
`


export const FeatureText = (props) => (
    <Wrapper>
        <SmallerHeading>{props.title}</SmallerHeading>
        <Paragraph>{props.content}</Paragraph>
    </Wrapper>
)
