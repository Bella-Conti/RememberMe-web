import { BoxStyled } from "./box";

export default function Box({children, ...props}) {
  return <BoxStyled {...props}>{children}</BoxStyled>
}