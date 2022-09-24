import styled from "styled-components"
import { mobile } from "../responsive";


const Container = styled.div`
height: 40px;
background-color: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
font-weight: 500;
word-spacing: 3px;
${mobile({fontSize: "12px"})}



`

const Announcement = () => {
  return (
    <Container>
        Super se upar Deals!  Free Shipping on Orders above 1000 ₹
    </Container>
  )
}

export default Announcement