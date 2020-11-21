import React from "react"
import styled from "styled-components"
import { StoreIcons } from "./StoreIcons"
import { ContentText } from "./ContentText"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 60vh; 
    justify-content: center;
`

export const IconText = (props) => (
    <Wrapper >
        <ContentText 
        paragraphFontSize={props.paragraphFontSize} 
        headingFontSize={props.headingFontSize} 
        pColor={props.pColor} 
        hColor={props.hColor} 
        hPosition={props.hPosition}
        size={props.size} 
        title={props.title} 
        content={props.content}/>
        <StoreIcons />
    </Wrapper>
)