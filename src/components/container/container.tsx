import { ContainerStyled } from "./container-styled";
import { ContainerProps } from "./types";

export const Container = ({ ...props }: ContainerProps) => {
  return <ContainerStyled {...props} />;
};
