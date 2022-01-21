import Calendar from "../components/calendar/Calendar";
import Container from "../components/container/Container";
import ScheduleCard from "../templates/schedule-card/ScheduleCard";
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

        {/* <Container
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
        </Container> */}

      <ScheduleCard title="Ir ao dentista" />
      <ScheduleCard title="Aniversário da Ana, levar presente" />

        {/* <Container
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
        </Container> */}
        </Container>
        
        

        <Container
          height="60%"
          width="60%"
          color="white"
          margin="40px"
          fontSize="15px"
          background="red"
        >
          <Calendar />
        </Container>
      </Container>
    </>
  );
}

export default Schedule;
