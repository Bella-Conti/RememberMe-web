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

<OutsideClickHandler
              onOutsideClick={() => {
                setVisible(false);
              }}
            >
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Footer>
          <Card.Actions>
            <Icon name="access_alarm" />

              <Icon
                name="label"
                type="outlined"
                onClick={() => setVisible(!visible)}
              >
                {visible ? "Close" : "Open"}
              </Icon>
            {visible && <TagSelector />}

            <Icon name="delete" type="outlined" />



            <Icon name="repeat"
            onClick={() => setVisible(!visible)}
            >
            {visible ? "Close" : "Open"}
            </Icon>
            {visible && <SelectDay />}


          </Card.Actions>
        </Card.Footer>
      </Card>
      </OutsideClickHandler>
    </>
  );
}
{
  /* {visible ? <TagSelector /> : null} */
}
