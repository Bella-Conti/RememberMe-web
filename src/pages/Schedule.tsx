import Calendar from "components/calendar/Calendar";
import ScheduleCard from "templates/schedule-card";
import Container from "../components/container";
import Text from "../components/text";

export const Schedule = () => {
  return (
    <>
      <Container>
        <Text fontSize="x2l">Today events</Text>
        <ScheduleCard title="Write here what will happen that day..." />
        <Calendar />
      </Container>
    </>
  );
};
