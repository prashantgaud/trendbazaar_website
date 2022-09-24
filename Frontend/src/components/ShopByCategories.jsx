import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
height: 40px;
background-color: none;
color: black;
display: flex;
align-items: center;
justify-content: center;
font-size: 40px;
font-weight: 600;
margin: 5px 0px 5px 0px;
${mobile({fontSize: "20px"})}

`
function ShopByCategories() {
  return (
    <Container>Shop by Categories</Container>
  )
}

export default ShopByCategories