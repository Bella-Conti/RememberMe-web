import { BackgroundSideStyled } from "./backgroundSide";

export default function BackgroundSide({children, ...props}) {
  return (
  <BackgroundSideStyled {...props}>{children}</BackgroundSideStyled>
  );
}
