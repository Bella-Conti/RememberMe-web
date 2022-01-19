import DemoApp from "../demoCalendar";
import Container from "../components/container/Container";
import Card from "../components/card/Card";
import Text from "../components/text/Text";

function Schedule() {
  return (
    <>
      <Container
        height="100%"
        width="100%"
        display="flex"
        justifyContent="flex-end"
        flexDirection="colunm"
      >
        <Container  margin="40px">
        <Text marginLeft="132px" type="medio" fontWeight="200" marginBottom="60px">
          Today events
        </Text>

        <Container
        height="75px"
        width="400px"
        background="#e9e8e8"
        margin="40px"
        padding="10px"
        borderRadius="5px"
        >
          <Text color="#212327" type="label" >
            Ir ao dentista
          </Text>
        </Container>

        <Container
        height="75px"
        width="400px"
        background="#e9e8e8"
        margin="40px"
        padding="10px"
        borderRadius="5px"
        >
          <Text color="#212327" type="label" >
            Aniversário da Ana, levar presente
          </Text>
        </Container>
        </Container>
        
        

        <Container
          height="60%"
          width="60%"
          color="white"
          margin="40px"
          fontSize="15px"
        >
          <DemoApp />
        </Container>
      </Container>
    </>
  );
}

export default Schedule;
