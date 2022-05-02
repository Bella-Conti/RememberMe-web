import { useState } from "react";

import { Flex } from "components/flex/flex-styled";
import Icon from "components/icon";
import Text from "components/text";
import { format } from "date-fns";

type CalendarHeaderProps = {
  dateFormat: string | "MMMM yyyy";
};

export const CalendarHeader = ({ dateFormat }: CalendarHeaderProps) => {
  const [currentMonth, setMonth] = useState(new Date());

  return (
    <Flex>
      <Icon fontSize="x5l" color="white" name="arrow_left" />
      <Text fontSize="x5l">{format(currentMonth, dateFormat)}</Text>
      <Icon fontSize="x5l" color="white" name="arrow_right"></Icon>
    </Flex>
  );
};
