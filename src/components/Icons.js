import React from "react"
import styled from "styled-components"
import AppStore from "../assets/app-store.png"
import GooglePlay from "../assets/google-play.png"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
    margin-top: 8%;
`

const Badge = styled.img`
    height: 4.6875em;
`

export const Icons = () => (
    <Wrapper>
        <Badge src={GooglePlay} alt="google-play"/>
        <Badge src={AppStore} alt="app-store"/>
    </Wrapper>
)