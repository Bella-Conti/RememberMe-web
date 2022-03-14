import BackgroundSide from "../components/container/BackgroundSide";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Text from "../components/text/Text";
import Icon from "../components/icon/Icon";
import Container from "../components/container/Container";
import api from "../service/";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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

  /* 
  
   {
  "createdAt": "2022-02-05T07:32:46.853Z",
  "name": "Alison Miller",
  "email": "isabella@gmail.com",
  "password": "1234567890",
  "id": "1"
 },
  */

  async function login() {
    const loginData = {
      email: email,
      password: password,
    };

    // option 1
    //api.get(`/Users/${}`)
    //  const response = api.get("/Users/1")

    //  api.get("/Users/1")
    //   .then((response) =>{
    //     if(response.data.email == email && response.data.password == password){
    //       alert("email and senha right")
    //     }
    //   })

    const response = await api.get("/Users/1");
        if(response.data.email == email && response.data.password == password){
          alert("async await email and senha right")
        }

  }

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
          <img src="/assets/Add.svg" alt="" />

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
              Login
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
              <Text>E-mail</Text>
              <Input marginBottom="60px" onChange={validationEmail} />

              <Text>Password</Text>
              <Input marginBottom="20px" onChange={validationPassword} />
              <Text marginBottom="80px">I forgot the password</Text>
              <Button
                variant="default"
                marginBottom="40px"
                icon={<Icon name="east" />}
                onClick={login}
              >
                Sign In
              </Button>
              <Button variant="transparent" icon={<Icon name="east" />}>
                Register{" "}
              </Button>
            </Container>
          </Container>
        </BackgroundSide>
      </Container>
    </>
  );
}

export default Login;
