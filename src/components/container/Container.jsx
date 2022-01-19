import { ContainerStyled } from "./container";

export default function Container({children, ...props}) {
  return (
  <ContainerStyled {...props}>{children}</ContainerStyled>
  );
}
