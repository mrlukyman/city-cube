import React from "react"
import styled from "styled-components"
import FBButton from "../assets/FB.png"
import YTButton from "../assets/YT.png"
import IGButton from "../assets/IG.png"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 25%;
    justify-content: space-between;
    margin-top: 4%;
`

const Badge = styled.img`
    height: auto;
    width: 65px;
`

export const AboutIcons = () => (
    <Wrapper>
        <Badge src={YTButton} alt="google-play"/>
        <Badge src={FBButton} alt="app-store"/>
        <Badge src={IGButton} alt="app-store"/>
    </Wrapper>
)