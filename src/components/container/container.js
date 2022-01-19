import styled from "styled-components";

export const ContainerStyled = styled.div`
  height: ${(props) => props?.height};
  width: ${(props) => props?.width};
  display: ${(props) => props?.display};
  flex-direction: ${(props) => props?.flexDirection};
  align-items: ${(props) => props?.alignItems};
  background: ${(props) => props?.background};
  justify-content: ${(props) => props?.justifyContent};
  float: ${(props) => props?.float};
  background: ${(props) => props?.background};
  color: ${(props) => props?.color};
  margin: ${(props) => props?.margin};
`;
