import React from "react"
import styled from "styled-components"
import { AppPreview } from "./AppPreview"
import { IconText } from "./IconText"
import { Container } from "./common/Container"

const Wrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`

export const UpperMobileSection = (props) => (
    <Wrapper>
        <AppPreview screen="screen1" size="normal" />
        <IconText 
        paragraphFontSize="small" 
        headingFontSize="big" 
        hColor="white" 
        pColor="white" 
        title={props.title} 
        content={props.content}/>
    </Wrapper>
)
