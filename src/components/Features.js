import React from "react"
import styled from "styled-components"
import { Container } from "./common/Container"
import { AppPreview } from "./AppPreview"
import { FeaturesText } from "./FeaturesText"

const Wrapper = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

export const Features = (props) => (
    <Wrapper>
        <FeaturesText />
        <AppPreview size="small" order={props.order}/>
    </Wrapper>
)
