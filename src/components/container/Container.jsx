import { ContainerStyled } from "./container-styled";

export default function Container({children, ...props}) {
  return (
  <ContainerStyled {...props}>{children}</ContainerStyled>
  );
}
