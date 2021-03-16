import React from "react"
import styled from "styled-components"
import { ContentText } from "./ContentText"
import { Container } from "./common/GlobalStyles"
import { Input } from "./Input"


const Wrapper = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #5659CF;
    border-radius: 30px;
    max-width: 900px;
    padding: 3.5rem;

    @media screen and (max-width: 960px) {
        
    }
`

export const Newsletter = (props) => (
    <Wrapper>
        <ContentText 
        paragraphFontSize="small"
        headingFontSize="big"
        pColor="white"
        hColor="white"
        hPosition="center"
        pPosition="center"
        size="normal"
        title={props.title}
        content={props.content}
        />
        <Input />
    </Wrapper>
)
