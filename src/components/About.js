import React from "react"
import styled from "styled-components"
import { SocialIcons } from "./SocialIcons"
import { Container } from "./common/GlobalStyles"
import { ContentText } from "./ContentText"
import { Back } from "./common/Backround"



const Wrapper = styled(Container)`
    display: flex;
    max-width: 100%;
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
            <SocialIcons />
        </Wrapper>
    </WrapperColor>
)