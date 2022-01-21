import Card from "../../components/card/Card";
import Icon from "../../components/icon/Icon";

export default function ScheduleCard({ title }) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      {/* <Card.Footer>
        <Card.Actions>
          <Icon />
        </Card.Actions>
      </Card.Footer> */}
    </Card>
  );
}
