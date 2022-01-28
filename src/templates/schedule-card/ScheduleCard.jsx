import Card from "../../components/card/Card";
import Icon from "../../components/icon/Icon";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import TagSelector from "../../components/widgets/tagSelector/TagSelector";
import SelectDay from "../../components/widgets/selectDay/SelectDay";

export default function ScheduleCard({ title }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Footer>
          <Card.Actions>
            <Icon name="access_alarm" />

            <OutsideClickHandler
              onOutsideClick={() => {
                setVisible(false);
              }}
            >
              <Icon
                name="label"
                type="outlined"
                onClick={() => setVisible(!visible)}
              >
                {visible ? "CLose" : "Open"}
              </Icon>
            </OutsideClickHandler>
            {visible && <TagSelector />}

            <Icon name="delete" type="outlined" />
            <Icon name="repeat" />
          </Card.Actions>
        </Card.Footer>
      </Card>
    </>
  );
}
{
  /* {visible ? <TagSelector /> : null} */
}
