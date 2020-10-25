import React from "react"
import styled from "styled-components"
import { Heading } from "./common/Heading"
import { Icons } from "./Icons"

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    margin-top: 8%;
`

const StyledParagraph = styled.p`
    font-size: 20px;
    color: white;
`

const WhiteHeading = styled(Heading)`
    color: white;
    font-size: 55px;
`

export const MainText = () => (
    <Wrapper >
        <WhiteHeading>CityCube</WhiteHeading>
        <StyledParagraph> 
            Wherever some that and kiwi that 
            well dolphin alas this wantonly jeepers 
            jeepers the mindfully one aside canny 
            one preparatory up less therefore 
            hello oh amid goodness.
        </StyledParagraph>
        <Icons />
    </Wrapper>
)