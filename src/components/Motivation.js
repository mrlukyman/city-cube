import React from "react"
import styled from "styled-components"
import { ContentText } from "./ContentText"

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    max-width: 400px;
    text-align: center;
    padding: 2rem 1rem;
`

const Badge = styled.img`
    height: 4.6875em;
`

export const Motivation = (props) => (
        <Wrapper>
            <ContentText 
            headingFontSize="medium" 
            paragraphFontSize="extrasmall"
            hColor="white"
            hPosition="center"
            pColor="white"
            title={props.title} 
            content={props.content} />
        </Wrapper>
)