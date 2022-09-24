import { useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import { mobile } from "../responsive";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/premium-photo/happy-young-african-woman-standing-with-her-finger-pointing-pink-background_74952-239.jpg?w=900")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Error = styled.div`
  color: red;
`;


const Error1 = styled.div`
  color: red;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:disabled {
    color: green;
    cursor: not-allowed
  }
`   

const Linkk = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: none;
  cursor: pointer;
  color: black;
`;

const Login = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };


  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Username"  onChange={(e) => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
          
          <Button onClick={handleClick} disabled={isFetching}>
            LOGIN
          </Button>
          {error && <Error>Wrong credentials</Error>}
          {error && <Error1>Invalid username or password</Error1>}
          
          <Linkk>DO NOT YOU REMEMBER THE PASSWORD?</Linkk>
         <Link to="/register">
          <Linkk>CREATE A NEW ACCOUNT</Linkk>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
