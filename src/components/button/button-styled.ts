import { GenericPropsObjectNested } from "src/utils/types";
import styled, { css } from "styled-components";
import { fontSize } from "../../theme/global";

const buttonVariant: GenericPropsObjectNested = {
  default: {
    background: "linear-gradient(135deg,#7F0E96 2%,#FF73B6 120%)",
    color: "#e5e5e5",
    border: "none",
    cursor: "pointer",
  },
  ghost: {
    background: "transparent",
    border: "solid 1px #6868B5",
    color: "#e5e5e5",
    cursor: "pointer",
  },
  disabled: {
    background: "#E8E8E8",
    border: "none",
    color: "#A8AAAF",
    cursor: "not-allowed",
  },
};

const buttonSize: GenericPropsObjectNested = {
  sm: {
    width: "9.938rem",
    height: "2.875rem",
    "font-size": fontSize.sm,
  },
  md: {
    width: "18.438rem",
    height: "3rem",
    "font-size": fontSize.md,
  },
  lg: {
    width: "23.438rem",
    height: "3.125rem",
    "font-size": fontSize.lg,
  },
};

// <Button variant="ghost" size="md" />

type ButtonStyledProps = {
  variant?: string;
  size?: string;
  hasIcon?: boolean;
  fontSize?: string;
};

export const ButtonStyled = styled.button<ButtonStyledProps>`
  ${props =>
    css({
      ...buttonVariant[props?.variant || "default"],
      ...buttonSize[props?.size || "md"],
    })}
  border-radius: 5px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 27px;
  display: flex;
  justify-content: ${props => (props.hasIcon ? "space-between" : "center")};
  align-items: center;
  padding: 0;
  margin: 0;

  ${props =>
    css({
      ...props?.theme[props.fontSize || ""],
    })}

  ::after {
    font-family: "Material Icons";
    content: ${(props: any) => props?.hasIcon?.props.name || ""};
  }
`;
