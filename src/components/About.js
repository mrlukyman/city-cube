import React from "react"
import styled from "styled-components"
import { SocialIcons } from "./SocialIcons"
import { ContentText } from "./ContentText"

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    padding: 30px 0;
    width: 100%;
    background-color: #494949;
`

export const About = (props) => (
        <Wrapper>
            <ContentText 
            size="small" 
            headingFontSize="big" 
            paragraphFontSize="big"
            hColor="white"
            hPosition="center"
            pColor="white"
            title={props.title} 
            content={props.content} />
            <SocialIcons />
        </Wrapper>
)