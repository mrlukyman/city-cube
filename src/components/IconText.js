import React from "react"
import styled from "styled-components"
import { Heading } from "./common/Heading"
import { StoreIcons } from "./StoreIcons"
import { ContentText } from "./ContentText"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 8%;
`

export const IconText = (props) => (
    <Wrapper >
        <ContentText 
        paragraphFontSize={props.paragraphFontSize} 
        headingFontSize={props.headingFontSize} 
        pColor={props.pColor} 
        hColor={props.hColor} 
        size={props.size} 
        title={props.title} 
        content={props.content}/>
        <StoreIcons />
    </Wrapper>
)