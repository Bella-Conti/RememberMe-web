import { ReactNode } from "react";
import { BackgroundSideStyled } from "./background-side-styled";

type BackgroundSideProps = {
  children: ReactNode;
};

export default function BackgroundSide({
  children,
  ...props
}: BackgroundSideProps) {
  return <BackgroundSideStyled {...props}>{children}</BackgroundSideStyled>;
}
