import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height: 40px;
background-color: none;
color: black;
display: flex;
align-items: center;
justify-content: center;
font-size: 30px;
font-weight: 600;
margin: 5px 0px 5px 0px;
`
function TrendingNow() {
  return (
    <Container> TRENDING NOW </Container>
  )
}

export default TrendingNow