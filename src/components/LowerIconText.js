import { Container } from "./common/GlobalStyles"
import React from "react"
import styled from "styled-components"
import { IconText } from "./IconText"

const Wrapper = styled(Container)`
    display: flex;
    justify-content: center;
    margin-bottom: 8%;
    text-align: center;
`

export const LowerIconText = (props) => (
    <Wrapper>
        <IconText 
        paragraphFontSize={props.paragraphFontSize} 
        headingFontSize={props.headingFontSize} 
        pColor={props.pColor} 
        hColor={props.hColor} 
        hPosition={props.hPosition}
        size={props.size} 
        title={props.title} 
        content={props.content}/>
    </Wrapper>
)