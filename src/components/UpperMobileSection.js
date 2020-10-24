import React from "react"
import styled from "styled-components"
import { AppPreview } from "./AppPreview"
import { MainText } from "./MainText"
import { Container } from "./common/Container"

const Wrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;  
`

export const UpperMobileSection = () => (
    <Wrapper>
        <AppPreview size="normal" />
        <MainText />
    </Wrapper>
)
