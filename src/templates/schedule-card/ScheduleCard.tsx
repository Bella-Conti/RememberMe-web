import Card from "components/card/";
import Icon from "components/icon";
import { useState } from "react";
import TagSelector from "components/widgets/tagSelector/TagSelector";
import SelectDay from "components/widgets/selectDay/SelectDay";

type ScheduleCardProps = {
  title: string;
};

export const ScheduleCard = ({ title }: ScheduleCardProps) => {
  const [visible, setVisible] = useState(false);
  const [visibleTag, setVisibleTag] = useState(false);
  const [visibleDays, setVisibleDays] = useState(false);

  return (
    <>
      <Card>
        <Card.Title>{title}</Card.Title>
        <Card.Footer>
          <Card.Actions>
            <Icon name="access_alarm" />

            <Icon
              name="label"
              type="outlined"
              onClick={() => {
                setVisibleTag(!visibleTag);
                setVisibleDays(false);
              }}
            />
            {/* {visibleTag ? "Close" : "Open"} */}
            {/* </Icon> */}
            {visibleTag && <TagSelector />}

            <Icon name="delete" type="outlined" />

            <Icon
              name="repeat"
              onClick={() => {
                setVisibleDays(!visibleDays);
                setVisibleTag(false);
              }}
            />
            {/* {visibleDays ? "Close" : "Open"} */}
            {/* </Icon> */}
            {visibleDays && <SelectDay />}
          </Card.Actions>
        </Card.Footer>
      </Card>
    </>
  );
};
{
  /* {visible ? <TagSelector /> : null} */
}
