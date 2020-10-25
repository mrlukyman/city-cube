import React from "react"
import styled from "styled-components"
import { Container } from "./common/Container"
import { AppPreview } from "./AppPreview"
import { FeatureText } from "./FeatureText"

const Wrapper = styled(Container)`
    flex-wrap: wrap;
`

const FeatureWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    
`

export const Feature = () => (
    <Wrapper>
        <FeatureWrapper>
            <FeatureText order="left" />
            <AppPreview order="right" size="small" />
        </FeatureWrapper>
            <FeatureWrapper>
                <FeatureText order="right" />
                <AppPreview order="left" size="small" />
            </FeatureWrapper>
    </Wrapper>
)
