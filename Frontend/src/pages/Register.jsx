import styled from "styled-components";
import { mobile } from "../responsive";
import { useState } from "react";
import axios from "axios"
import {useHistory} from "react-router-dom"
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/cheerful-happy-thai-asian-woman-enjoying-shopping-she-is-carrying-shopping-bags-celebration_74952-2265.jpg?w=740&t=st=1663702705~exp=1663703305~hmac=de98243a0e3ae75ca5d77f070aecf225db106dc59c0433764ac24d1d14354c20")
      right;
  
  display: flex;
  align-items: center;
  justify-content: left;
`;

const Wrapper = styled.div`
  width: 50%;
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
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const SelectOne =styled.div`
  
`

const Button1 = styled.button`
  width: 120px;
  border: none;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Button2 = styled.button`
  width: 120px;
  border: none;
  margin-left: 80px;
  padding: 15px 20px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const Register = () => {

const [user, setUser] = useState(
  {
    username: "",
    email:"",
    password:""

  }
)

const history= useHistory()

const handleChange= (e) => {
 
  
  const {name, value} = e.target
  e.preventDefault();
  //console.log(name, value); 
  setUser({
    ...user,
    [name]: value
  })
}


const register=async ()=>{
  const {username ,email ,password} = user
 
  if(username && email && password) {
   await axios.post("http://localhost:5000/auth/register", user).then(res=> {
     alert("Congratulations!!! Your registration is successful. 🎉");
     alert("Now you can login to your TrendBazaar account. Happy Shopping ✨🛍️" );
    
    
    })
  }

  //  history.push("/login");
  
  else {
    alert("Please enter valid input 😢")
  }

}

//{console.log("User",)}
  return (
    <Container>
      <Wrapper>

        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input type="text"  placeholder="Name" required autoFocus Autocomplete />
          <Input type="text" placeholder="Last Name" required />
          <Input type="text"     name="username" value={user.username} placeholder="Username"  onChange={ handleChange } required/>
          <Input type="email"    name="email" value={user.email} placeholder="Email" onChange={ handleChange }  required/>
          <Input type="password" name="password" value={user.password} onChange={ handleChange } title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Create Password" required/>
          <Input  type="password" placeholder="Confirm Password"  required/>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>

          <SelectOne>
          <Button1 type="submit"  onClick={register}>CREATE</Button1>
          <Link to="/login">
          <Button2 >LOGIN</Button2>
          </Link>
          </SelectOne>
        </Form>
      </Wrapper>
    </Container>
  );
};
//pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
export default Register;
