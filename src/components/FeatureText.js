import React from "react"
import styled from "styled-components"
import { SmallerHeading } from "./common/SmallerHeading"
import Content from '../data/Content.json'
import { Paragraph } from "./common/Paragraph"

const order = {
    left: "1",
    right: "2"
}

const Wrapper = styled.div`
    width: 30%;
    order: ${(props) => order[props.order]};
`


export const FeatureText = () => (
    Content.map((contentDetail, index) => (
        <Wrapper>
            <SmallerHeading>{contentDetail.title}</SmallerHeading>
            <Paragraph>{contentDetail.content}</Paragraph>
        </Wrapper>
    ))
)
