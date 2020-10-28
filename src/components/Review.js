import React from "react"
import styled from "styled-components"
import { Container } from "./common/Container"
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "../index.css"

const StyledRating = withStyles({
    
    iconFilled: {
    color: '#ff6d75',
    marginBottom: "20px"
    },
    
  })(Rating);


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
`

const StyledItalic = styled.i`
    color: #696969;
    font-size: 19px;
    text-align: center;
`

const StyledName = styled.h2`
    text-transform= upper-case;
`

export const Review = (props) => (
    <Wrapper>
        <StyledRating size="large" name="half-rating-read" defaultValue={4} precision={0.5} readOnly icon={<FavoriteIcon fontSize="inherit" />} />
        <StyledItalic>{props.content}</StyledItalic>
        <StyledName>{props.name}</StyledName>
    </Wrapper>
)

