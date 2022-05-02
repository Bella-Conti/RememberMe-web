import styled from "styled-components";
import { ContainerProps } from "./types";

export const ContainerStyled = styled.div<ContainerProps>`
  height: ${props => props?.height};
  width: ${props => props?.width};
  display: ${props => props?.display};
  flex-direction: ${props => props?.flexDirection};
  flex-wrap: ${props => props?.flexWrap};
  align-items: ${props => props?.alignItems};
  justify-content: ${props => props?.justifyContent};
  float: ${props => props?.float};
  background: ${props => props?.background};
  color: ${props => props?.color};
  margin: ${props => props?.margin};
  margin-top: ${props => props?.marginTop};
  border-radius: ${props => props?.borderRadius};
  padding: ${props => props?.padding};
  font-family: "Poppins", sans-serif;
  font-size: ${props => props?.fontSize};
  gap: ${props => props?.gap};
  column-gap: ${props => props?.columnGap};
  position: ${props => props?.position};
`;
