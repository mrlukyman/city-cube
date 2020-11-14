import React from "react"
import styled from "styled-components"
import { ContentText } from "./ContentText"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-round;
    margin-top: 10%;
    max-width: 25%;
`

const Badge = styled.img`
    height: 4.6875em;
`

export const Motivation = (props) => (
        <Wrapper>
            <ContentText 
            size="medium" 
            headingFontSize="medium" 
            paragraphFontSize="extrasmall"
            hColor="black"
            hPosition="center"
            pColor="black"
            title={props.title} 
            content={props.content} />
        </Wrapper>
)