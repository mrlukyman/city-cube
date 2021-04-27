import React from "react"
import styled from "styled-components"
import AppStore from "../assets/app-store.png"
import GooglePlay from "../assets/google-play.png"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-between;
    padding: 1rem;

    @media screen and (max-width: 960px) {
        justify-content: space-around;
    }
`

const Badge = styled.img`
    height: 4.6875rem;

    @media screen and (max-width: 960px) {
        height: 3.5rem;
    }

`

export const StoreIcons = () => (
    <Wrapper>
        <Badge src={GooglePlay} alt="google-play"/>
        <Badge src={AppStore} alt="app-store"/>
    </Wrapper>
)