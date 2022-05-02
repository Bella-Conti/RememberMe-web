import { ReactNode } from "react";
import { TextStyled } from "./text-styled";

type TextProps = {
  children: ReactNode;
  fontSize?: string;
  fontWeight?: string;
  type?: string;
};

export const Text = ({ children, ...props }: TextProps) => {
  return <TextStyled>{children}</TextStyled>;
};
