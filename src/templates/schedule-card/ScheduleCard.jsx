import Card from "../../components/card/Card";
import Icon from "../../components/icon/Icon";
import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import TagSelector from "../../components/widgets/tagSelector/TagSelector";
import SelectDay from "../../components/widgets/selectDay/SelectDay";

export default function ScheduleCard({ title }) {
  const [visible, setVisible] = useState(false);
  const [visibleTag, setVisibleTag] = useState(false);
  const [visibleDays, setVisibleDays] = useState(false);
  
  return (
    <>

<OutsideClickHandler
              onOutsideClick={() => {
                setVisibleTag(false);
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
                onClick={() => {
                  setVisibleTag(!visibleTag);
                  setVisibleDays(false)
                }}
              >
                {visibleTag ? "Close" : "Open"}
              </Icon>
            {visibleTag && <TagSelector />}

            

            <Icon name="delete" type="outlined" />

           
        
            <Icon name="repeat"
            onClick={() =>{
              setVisibleDays(!visibleDays);
              setVisibleTag(false)
            }}
            >
             
            {visibleDays ? "Close" : "Open"}

            </Icon>
            {visibleDays && <SelectDay />}


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
