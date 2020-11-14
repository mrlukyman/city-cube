import React from "react"
import styled from "styled-components"
import { Motivation } from "./Motivation"
import content from '../data/Content'
import { Container } from "./common/Container"
import { Back } from "./common/Backround"

const Wrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    padding-top: 1%;
`


export const MotivationWrap = (props) => (
    <Wrapper>
    {content.motivation.map((motivation, index) => <Motivation 
        title={motivation.title}
        content={motivation.content} 
        name={motivation.name} 
    />)}
    </Wrapper>
)