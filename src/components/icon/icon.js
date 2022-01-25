import styled, { css } from "styled-components";

export const IconStyled = styled.span.attrs(() => ({
  className: "material-icons",
}))`
  ${(props) =>
    css({
      color: props.color,
      ...props.theme[props.fontSize],
    })}
`;
