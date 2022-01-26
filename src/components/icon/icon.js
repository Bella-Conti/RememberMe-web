import styled, { css } from "styled-components";

export const IconStyled = styled.span.attrs((props) => ({
  className:
    props?.type === "outlined" ? "material-icons-outlined" : "material-icons",
}))`
  color: white;
  ${(props) =>
    css({
      color: props.color,
      ...props.theme[props.fontSize],
    })}
`;
