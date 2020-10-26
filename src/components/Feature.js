import React from "react"
import styled from "styled-components"
import { AppPreview } from "./AppPreview"
import { Container } from "./common/Container"
import { ContentText } from "./ContentText"

const direction = {
    normal: "row",
    reversed: "row-reverse"
}

const Wrapper = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${(props) => direction[props.direction]};
`

export const Feature = (props) => (
    <Wrapper direction={props.direction}>
        <ContentText 
        size="small" 
        headingFontSize="small" 
        paragraphFontSize="big"
        hColor="black"
        pColor="black"
        title={props.title} 
        content={props.content} />
        <AppPreview screen={props.screen} size="small" />
    </Wrapper>
)

