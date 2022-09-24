import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
height: 600px;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
font-weight: 500;
word-spacing: 3px;
`

const Btn=styled.button`
  width: 120px;
  border: none;
  padding: 15px 20px;
  background-color: white;
  color: black;
  cursor: pointer;

`


const ErrorComp = () => {
  return (
    
    <Container>
        Error 404!! Page not found!!  That’s all we know.

    </Container>
  )
}

export default ErrorComp