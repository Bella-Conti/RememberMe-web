import { ReactNode } from "react";
import { BoxStyled } from "./box-styled";

type BoxProps = {
  children: ReactNode;
};

export const Box = ({ children, ...props }: BoxProps) => {
  return <BoxStyled {...props}>{children}</BoxStyled>;
};
