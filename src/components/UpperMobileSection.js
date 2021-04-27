import React from "react"
import styled from "styled-components"

import { AppPreview } from "./AppPreview"
import { IconText } from "./IconText"
import { Container } from "./common/GlobalStyles"

const Wrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between; 
    flex-direction: row-reverse;
    padding-top: 3rem;
    
    
    @media screen and (max-width: 960px) {
        flex-direction: column;
        align-items: center;
        flex: 1;
        padding-top: 1rem;
    }
`

export const UpperMobileSection = (props) => (
    <Wrapper>
        <IconText 
        paragraphFontSize="small" 
        headingFontSize="big" 
        hColor="white" 
        pColor="white" 
        hPosition="center"
        pPosition="center"
        title={props.title} 
        content={props.content}/>
        <AppPreview screen="screen1" size="normal" />
    </Wrapper>
)
