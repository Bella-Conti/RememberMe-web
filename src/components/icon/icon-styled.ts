import styled, { css } from "styled-components";

type IconStyledProps = {
  type?: string;
  fontSize?: string;
};

export const IconStyled = styled.span.attrs((props: IconStyledProps) => ({
  className:
    props?.type === "outlined" ? "material-icons-outlined" : "material-icons",
}))<IconStyledProps>`
  color: white;
  cursor: pointer;
  ${props =>
    css({
      color: props.color,
      ...props.theme[props?.fontSize || ""],
    })}
`;
