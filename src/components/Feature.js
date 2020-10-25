import React from "react"
import styled from "styled-components"
import { Container } from "./common/Container"
import { AppPreview } from "./AppPreview"
import { FeatureText } from "./FeatureText"

const direction = {
    normal: "row",
    reversed: "row-reverse"
}

const Wrapper = styled(Container)`
    flex-wrap: wrap;
`

const FeatureWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: ${(props) => direction[props.direction]};
`

export const Feature = () => (
    <Wrapper>
        <FeatureWrapper direction="normal" >
            <FeatureText />
            <AppPreview size="small" />
        </FeatureWrapper>
            <FeatureWrapper direction="reversed" >
                <FeatureText />
                <AppPreview size="small" />
            </FeatureWrapper>
    </Wrapper>
)
