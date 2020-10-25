import React from "react"
import styled from "styled-components"
import { SmallerHeading } from "./common/SmallerHeading"
import Content from '../data/Content.json'
import { Paragraph } from "./common/Paragraph"

const Wrapper = styled.div`
    width: 30%;
`


export const FeatureText = () => (
    Content.map((contentDetail, index) => (
        <Wrapper>
            <SmallerHeading>{contentDetail.title}</SmallerHeading>
            <Paragraph>{contentDetail.content}</Paragraph>
        </Wrapper>
    ))
)
