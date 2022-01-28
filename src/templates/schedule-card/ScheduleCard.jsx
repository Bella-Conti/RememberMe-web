import Card from "../../components/card/Card";
import Icon from "../../components/icon/Icon";
import React, { useState } from "react";
import TagSelector from "../../components/widgets/tagSelector/TagSelector";

export default function ScheduleCard({ title }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Footer>
          <Card.Actions>
            <Icon name="access_alarm" />
            <Icon name="label" type="outlined" onClick={() => setVisible(true)} />

            <Icon name="delete" type="outlined" />
            <Icon name="repeat" />
          </Card.Actions>
        </Card.Footer>
      </Card>
      {visible ? <TagSelector /> : null}
    </>
  );
}
