import React from "react"
import styled from "styled-components"
import { AppPreview } from "./AppPreview"
import { Container } from "./common/GlobalStyles"
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

    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`

export const Feature = (props) => (
    <Wrapper direction={props.direction}>
        <ContentText 
        size="small" 
        headingFontSize="small" 
        paragraphFontSize="big"
        hColor="white"
        pColor="white"
        title={props.title} 
        content={props.content} />
        <AppPreview screen={props.screen} size="small" />
    </Wrapper>
)

