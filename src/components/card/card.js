import styled from "styled-components";

export const CardStyled = styled.div`
  height: ${(props) => props?.margin};
  width: ${(props) => props?.margin};
  margin: ${(props) => props?.margin};
  margin-left: ${(props) => props?.marginLeft};
  margin-bottom : ${(props) => props?.marginBottom};
  background: ${(props) => props?.background};
  display: ${(props) => props?.display};
`