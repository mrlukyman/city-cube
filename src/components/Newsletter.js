import React from "react"
import styled from "styled-components"
import { ContentText } from "./ContentText"
import { Container } from "./common/Container"
import { Input } from "./Input"


const Wrapper = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #5659CF;
    padding: 60px;
    border-radius: 30px;
    margin: 50px 400px;
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
