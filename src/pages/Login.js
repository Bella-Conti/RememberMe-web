import BackgroundSide from "../components/container/BackgroundSide";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import Text from "../components/text/Text";
import Icon from "../components/icon/Icon";
import Container from "../components/container/Container";

function Login() {
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
            <Text fontWeight="300" type="medio" marginLeft="60px" marginBottom="378px">
              Publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document or a
              typeface
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
              <Input marginBottom="60px" />

              <Text>Password</Text>
              <Input marginBottom="20px" />
              <Text marginBottom="80px">I forgot the password</Text>
              <Button marginBottom="40px" icon={<Icon name="east" />}>
                Sign In{" "}
              </Button>
              <Button icon={<Icon name="east" />}>Register </Button>
            </Container>
          </Container>
        </BackgroundSide>
      </Container>
    </>
  );
}

export default Login;
