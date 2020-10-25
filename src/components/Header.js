import React from "react"
import styled from "styled-components"
import { Container } from "./common/Container"
import { Logo } from "./Logo"
import { Navbar} from "./Navbar"

const Wrapper = styled(Container)`
    position: relative;
    display: flex;
    padding-top: 30px;
    justify-content: space-between;
`
 
export const Header = () => (
    <Wrapper>
        <Logo />
        <Navbar />
    </Wrapper>
)
