import styled, { css } from "styled-components";

export const CalendarStyled = styled.div`
  display: block;
  position: relative;
  left: 0;
  right: 0;
  z-index: 9999;
  width: 100%;
  border: 1px solid #eee; //cor da borda de fora do calendario
`;

export const CalendarBodyStyled = styled.div`
  position: relative;
  left: 0;
  right: 0;
  z-index: 0;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    z-index: -1;
    background: #05093c;
    height: 100%;
    opacity: 0.5;
    filter: blur(40px);
  }
`;

export const CalendarHeaderStyled = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 115%;
  padding: 1.5em 0;
  /* HEADER--------- */
  display: block;
  width: 100%;
  padding: 1.75em 0;
  border-bottom: 1px solid orange; // cor da linha de cima dos nomes dos dias
  background: white; //fundo do mes e ano
  /* ------------ */
  /* ROW----------- */
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  /* ---------------- */
  align-items: center;
`;

export const CalendarDayStyled = styled.div`
  text-transform: uppercase;
  font-weight: 400;
  color: #ccc;
  font-size: 70%;
  padding: 0.75em 0;
  border-bottom: 1px solid orange; //cor da parte debaixo da linha q separa os dias da semana do calendario

  ${(props) =>
    css({
      ...calendarDayVariant[props.variant],
    })}
`;

export const CalendarCellStyled = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  position: relative;
  height: 5em;
  border-right: 1px solid #e1e0e0;
  border-bottom: 1px solid #e1e0e0;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s ease-out;
  color: #acaec3;
`;
export const CalendarBodyCellStyled = styled.div`
  position: relative;
  height: 5em;
  border-right: 1px solid green;
  overflow: hidden;
  cursor: pointer;
  /* background: green; */
  transition: 0.25s ease-out;
`;
export const CalendarBodySelectedStyled = styled.div`
  border-left: 10px solid transparent;
  border-image: linear-gradient(45deg, orange 0%, red 40%); //nao sei oq muda
  border-image-slice: 1;
`;
export const CalendarBodyRowStyled = styled.div`
  border-bottom: 1px solid white; //nao sei oq muda
`;

export const CalendarBodyCellNumberStyled = styled.div`
  position: absolute;
  font-size: 82.5%;
  line-height: 1;
  top: 0.75em;
  right: 0.75em;
  font-weight: 700;
`;

export const CalendarBodyDisabledStyled = styled.div`
  pointer-events: none;
`;

export const CalendarBodyCellBgStyled = styled.div`
  font-weight: 700;
  line-height: 1;
  color: pink; //nao sei oq muda
  opacity: 0;
  font-size: 8em;
  position: absolute;
  top: -0.2em;
  right: -0.05em;
  transition: 0.25s ease-out;
  letter-spacing: -0.07em;
`;

export const CalendarBodyColStyled = styled.div`
  flex-grow: 0;
  flex-basis: calc(100% / 7);
  width: calc(100% / 7);
`;
export const CalendarHeaderIconStyled = styled.div`
  cursor: pointer;
  transition: 0.15s ease-out;
`;

// ---------------------------------------------------------------

export const CalendarDay = styled.div``;

export const CalendarRow = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  ${({ ...props }) =>
    css({
      ...props,
    })}
`;

export const CalendarColStyled = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
  height: 80px;
  display: flex;

  ${(props) =>
    css({
      ...calendarColVariant[props.variant],
    })}
`;

const calendarColVariant = {
  center: {
    "justify-content": "center",
    "text-align": "center",
    "align-items": "center",
  },
  start: {
    "justify-content": "flex-start",
    "text-align": "left",
  },
  end: {
    "justify-content": "flex-end",
    "text-align": "right",
  },
};

const calendarDayVariant = {
  row: {
    margin: 0,
    padding: 0,
    display: "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    width: "100%",
  },
};
