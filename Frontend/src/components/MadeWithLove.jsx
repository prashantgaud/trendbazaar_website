import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
  ${mobile({ height: "50px" })}
 
`;

const Wrapper = styled.div`
   height: 50px;
   width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    font-size: 25px;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  
`;



const MadeWithLove = () => {
  return (

        <Container>
            <Wrapper>
            Made with ❤️ in India
            </Wrapper>
        </Container>

  )
}

export default MadeWithLove