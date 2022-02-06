import BackgroundSide from "../components/container/BackgroundSide";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Text from "../components/text/Text";
import Icon from "../components/icon/Icon";
import Container from "../components/container/Container";
import api from "../service/";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const nav = useNavigate();

  function validationName(event) {
    const nameInput = event.target.value;

    if (nameInput.length > 3) {
      setName(nameInput);
      console.log("NAME", name);
    }
  }
  
  function validationPassword(event) {
    const passwordInput = event.target.value;

    if (passwordInput.length >= 8) {
      setPassword(passwordInput);
      console.log("PASSWORD", password);
    }
  }
  function validationEmail(event) {
    const emailInput = event.target.value;

    if (emailInput.indexOf("@") > -1) {
      setEmail(emailInput);
      console.log("EMAIL", email);
    }
  }

 async function RegisterUsers() {
    const registerData = {
      name: name,
      email: email,
      password: password,
    };

    const response = await api.post("/Users", registerData)
    if(response.data.email == email && response.data.password == password){
      nav("/")
    } 

  }

 

  // api.post("/Users")
  // .then((response)=>{
  //   if(response.data.name == name && response.data.email == email && response.data.password == password){
  //     alert("register RIGHT")
  //   } else {
  //     alert("go again")
  //   }
  // })

  //  api.get("/Users/1")
    //   .then((response) =>{
    //     if(response.data.email == email && response.data.password == password){
    //       alert("email and senha right")
    //     }
    //   })



  return (
    <>
      <Container float="left" width="48vw">
        <Container
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          height="100vh"
        >
          <Text type="title" fontWeight="200">
            Welcome to
          </Text>

          <Container>
            <Text
              fontWeight="300"
              type="medio"
              marginLeft="60px"
              marginBottom="378px"
            >
              Welcome to remember me. Our goal is to help you remember your
              passwords, tasks and appointments!
            </Text>
          </Container>
        </Container>
      </Container>

      <Container background="rgba(5, 9, 60, 0.4)" float="right" width="48vw">
        <BackgroundSide>
          <Container flexDirection="column" alignItems="center" display="flex">
            <Text type="title" fontWeight="200">
              Register
            </Text>

            <Text marginBottom="80px" type="medio" fontWeight="700">
              Remember.me
            </Text>
            <Container
              flexDirection="column"
              width="423"
              height="500px"
              display="flex"
            >
              <Text>Nome</Text>
              <Input marginBottom="60px" onChange={validationName} />

              <Text>E-mail</Text>
              <Input marginBottom="60px" onChange={validationEmail} />

              <Text>Password</Text>
              <Input marginBottom="20px" onChange={validationPassword} />

              <Button
                variant="default"
                marginBottom="40px"
                icon={<Icon name="east" />}
                onClick={RegisterUsers}
              >
                Sign In
              </Button>
           
            </Container>
          </Container>
        </BackgroundSide>
      </Container>
    </>
  );
}

export default Register;
