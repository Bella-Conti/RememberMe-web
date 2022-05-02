import { CSSProperties, ReactNode } from "react";

export type ContainerProps = {
  children?: ReactNode;
} & Omit<CSSProperties, "translate">;
