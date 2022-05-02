import { useState } from "react";

import {
  CalendarStyled,
  CalendarCellStyled,
  CalendarDayStyled,
  CalendarColStyled,
  CalendarBodyCellBgStyled,
  CalendarBodyCellNumberStyled,
  CalendarBodyStyled,
  CalendarRow,
} from "./calendar-styled";

import Container from "components/container";
import CalendarHeader from "components/calendar/header/CalendarHeader";

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
        </CalendarColStyled>,
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
    let day = startDate || null;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        days.push(
          <CalendarCellStyled key={day.getTime()}>
            <CalendarBodyCellNumberStyled>
              {formattedDate}
            </CalendarBodyCellNumberStyled>
            <CalendarBodyCellBgStyled>{formattedDate}</CalendarBodyCellBgStyled>
          </CalendarCellStyled>,
        );
        day = dateFns.addDays(day, 1);
      }
      rows.push(<CalendarRow key={day.getTime()}>{days}</CalendarRow>);
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
