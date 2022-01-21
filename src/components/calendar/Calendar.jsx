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
} from "./calendar";

import Icon from "../icon/Icon";
import Text from "../text/Text";

import * as dateFns from "date-fns";

export default function Calendar() {
  const [currentMonth, setMonth] = useState(new Date());
  const [selectedDate, setDate] = useState(new Date());

  const renderHeader = () => {
    const dateFormat = "MMM yyyy";

    return (
      <CalendarHeaderStyled>
        <CalendarColStyled variant="start">
          <Icon name="chevron_left" />
        </CalendarColStyled>
        <CalendarColStyled variant="center">
          <Text type="label" color="black">
            {dateFns.format(currentMonth, dateFormat)}
          </Text>
        </CalendarColStyled>
        <CalendarColStyled variant="end">
          <Icon name="chevron_right"></Icon>
        </CalendarColStyled>
      </CalendarHeaderStyled>
    );
  };

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
    return <CalendarBodyStyled >{rows}</CalendarBodyStyled>;
  };

  return (
      <CalendarStyled>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </CalendarStyled>
  );
}
