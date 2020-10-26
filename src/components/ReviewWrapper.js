import React from "react"
import styled from "styled-components"
import { Review } from "./Review"
import content from '../data/Content'
import { Container } from "./common/Container"

const Wrapper = styled(Container)`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 8%;
`

export const ReviewWrapper = (props) => (
    <Wrapper>
       {content.review.map((review, index) => <Review 
        content={review.content} 
        name={review.name} 
      />)}
    </Wrapper>
)