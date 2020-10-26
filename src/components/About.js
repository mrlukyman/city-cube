import React from "react"
import styled from "styled-components"
import { AboutIcons } from "./AboutIcons"
import { Container } from "./common/Container"
import { ContentText } from "./ContentText"
import "../index.css"


const Wrapper = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

export const About = (props) => (
    <Wrapper>
        <ContentText 
        size="normal" 
        headingFontSize="big" 
        paragraphFontSize="big"
        hColor="black"
        hPosition="center"
        pColor="black"
        title={props.title} 
        content={props.content} />
        <AboutIcons />
    </Wrapper>
)