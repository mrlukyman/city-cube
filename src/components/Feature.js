import React from "react"
import styled from "styled-components"
import { Container } from "./common/Container"
import { AppPreview } from "./AppPreview"
import { FeatureText } from "./FeatureText"

const Wrapper = styled(Container)`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`

export const Feature = (props) => (
    <Wrapper>
        <FeatureText />
        <AppPreview size="small" order={props.order}/>
    </Wrapper>
)
