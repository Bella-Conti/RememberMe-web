import { ReactNode } from "react";
import { TagStyled } from "./tag-styled";

type TagProps = {
  children?: ReactNode;
  fontSize?: string;
  background?: string;
};

export const Tag = ({ children, ...props }: TagProps) => {
  return <TagStyled {...props}>{children}</TagStyled>;
};
