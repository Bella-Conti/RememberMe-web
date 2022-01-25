import { useState } from "react";

import { Flex } from "../../flex/flex";
import Icon from "../../icon/Icon";
import Text from "../../text/Text";
import { format } from "date-fns";

export default function CalendarHeader({ dateFormat = "MMMM yyyy" }) {
  const [currentMonth, setMonth] = useState(new Date());

  return (
    <Flex>
      <Icon fontSize="x5l" color="white" name="arrow_left" />
      <Text fontSize="x5l">{format(currentMonth, dateFormat)}</Text>
      <Icon fontSize="x5l" color="white" name="arrow_right"></Icon>
    </Flex>
  );
}
