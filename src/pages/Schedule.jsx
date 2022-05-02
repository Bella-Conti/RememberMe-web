import Calendar from "../components/calendar/Calendar";
import Container from "../components/container/Container";
import ScheduleCard from "../templates/schedule-card/ScheduleCard";
import Text from "../components/text/Text";

function Schedule() {
  return (
    <>
      <Container>
        <Text fontSize="x2l">Today events</Text>
        <ScheduleCard title="Write here what will happen that day..." />
        {/* <Calendar /> */}
      </Container>
    </>
  );
}

export default Schedule;
