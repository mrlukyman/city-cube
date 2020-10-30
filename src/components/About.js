import React from "react"
import styled from "styled-components"
import { SocialIcons } from "./SocialIcons"
import { Container } from "./common/Container"
import { ContentText } from "./ContentText"
import { Back } from "./common/Backround"
import "../index.css"


const Wrapper = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`

const WrapperColor = styled(Back)`

`

export const About = (props) => (
    <WrapperColor>
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
    </WrapperColor>
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
        <SocialIcons />
    </Wrapper>
main
)