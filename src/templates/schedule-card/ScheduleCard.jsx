import Card from "../../components/card/Card";
import Icon from "../../components/icon/Icon";

export default function ScheduleCard({ title }) {
  return (
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Footer>
        <Card.Actions>
          <Icon name="access_alarm" />
          <Icon name="label" type="outlined" />
          <Icon name="delete" type="outlined" />
          <Icon name="repeat" />
        </Card.Actions>
      </Card.Footer>
    </Card>
  );
}
