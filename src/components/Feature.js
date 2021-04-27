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
    padding: 2rem 12px;

    @media screen and (max-width: 960px) {
        flex-direction: column;
        text-align: center;
    }
`;

const TextWrapper = styled.div`
    padding-bottom: 40px;
`

export const Feature = (props) => (
    <Wrapper 
        direction={props.direction}>
       <TextWrapper>
            <ContentText 
            size="normal" 
            float={props.float}
            headingFontSize="small" 
            paragraphFontSize="small"
            hColor="white"
            pColor="white"
            title={props.title} 
            content={props.content} />
       </TextWrapper>
        <AppPreview screen={props.screen} size="small" />
    </Wrapper>
)

