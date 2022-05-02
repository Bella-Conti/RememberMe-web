import { ReactNode } from "react";
import { ButtonStyled } from "./button-styled";

type ButtonProps = {
  children: ReactNode;
  variant?: string;
  icon?: JSX.Element;
  size?: string;
  onClick: () => void;
};

export const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonStyled {...props}>{children}</ButtonStyled>;
};
