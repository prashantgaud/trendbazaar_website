
import React from "react";
import styled from "styled-components";
import Badge from '@mui/material/Badge';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { mobile } from "../responsive";



const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px" })}
 
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;


const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
  ${mobile({ display:"none"})}

`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  
  
`;

const Input = styled.input`
  width: 250px;
  padding: 0px;
  margin: 0px;
  border: 0px;
  height: 30px;
  ${mobile({ width: "50px" })}
`;



const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: 600;
  ${mobile({ fontSize: "15px" })}
  color: black;


`;



const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const RegisterBtn = styled.button`
background-color: black;
  color: #ffffff !important;
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const LoginBtn = styled.button`
background-color: black;
  color: #ffffff !important;
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;




const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
//  console.log(cart)


  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search for products, brands and more" />
            <SearchTwoToneIcon />

          </SearchContainer>
        </Left>
        <Center>
          <Link style={{textDecoration: 'none'}} to="/" className="link">
            <Logo>TrendBazaar.com</Logo>
          </Link>
        </Center>
        <Right>
 
          <Link to="/register" className="link">
            <RegisterBtn>Register</RegisterBtn>
          </Link>
          <Link to="/login" className="link">
            <LoginBtn> Sign in </LoginBtn>
          </Link>

          <Link to="/cart" className="link">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingBagIcon />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;