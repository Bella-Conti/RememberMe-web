import { BackgroundSideStyled } from "./backgroundSide-styled";

export default function BackgroundSide({children, ...props}) {
  return (
  <BackgroundSideStyled {...props}>{children}</BackgroundSideStyled>
  );
}
