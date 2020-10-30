import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    border: 1px solid #a9a9a9;
    background-color: white;
    border-radius: 50px;
`

const StyledInput = styled.input`
    font-size: 20px;
    width: 80%;
    border: none;
    border-radius: 50px;
    padding-left: 5%;

`

const StyledButton = styled.button`
    float: right;
    outline: none;
    background-color: black;
    border-radius: 50px;
    color: white;
    font-size: 20px;
    font-weight: 600;
    border: none;
    padding: 20px;
    margin: 5px;
    width: 20%;
`

export const Input = (props) => (
    <Wrapper>
        <StyledInput type="email" placeholder="mail@mail.com" />
        <StyledButton>Sigh Up</StyledButton>
    </Wrapper>
)
