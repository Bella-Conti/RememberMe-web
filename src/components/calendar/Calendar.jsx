import { useState } from "react";

import {
  CalendarStyled,
  CalendarHeaderStyled,
  CalendarCellStyled,
  CalendarDayStyled,
  CalendarBodyCellStyled,
  CalendarColStyled,
  CalendarBodyCellBgStyled,
  CalendarBodyCellNumberStyled,
  CalendarBodyStyled,
  CalendarRow,
} from "./calendar-styled";

import Container from "../container/Container";
import CalendarHeader from "./header/CalendarHeader";

import Icon from "../icon/Icon";
import Text from "../text/Text";

import * as dateFns from "date-fns";

export default function Calendar() {
  const [currentMonth, setMonth] = useState(new Date());
  const [selectedDate, setDate] = useState(new Date());

  const renderDays = () => {
    const dateFormat = "EEE";
    const days = [];

    const startDate = dateFns.startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <CalendarColStyled variant="center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </CalendarColStyled>
      );
    }

    return <CalendarDayStyled variant="row">{days}</CalendarDayStyled>;
  };

  const renderCells = () => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <CalendarCellStyled key={day}>
            <CalendarBodyCellNumberStyled>
              {formattedDate}
            </CalendarBodyCellNumberStyled>
            <CalendarBodyCellBgStyled>{formattedDate}</CalendarBodyCellBgStyled>
          </CalendarCellStyled>
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(<CalendarRow key={day}>{days}</CalendarRow>);
      days = [];
    }
    return <CalendarBodyStyled>{rows}</CalendarBodyStyled>;
  };

  return (
    <Container display="flex" flexDirection="column" padding="50px" gap="40px">
      <CalendarHeader />
      <CalendarStyled>
        {renderDays()}
        {renderCells()}
      </CalendarStyled>
    </Container>
  );
}
