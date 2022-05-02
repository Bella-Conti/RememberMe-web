import styled, { css } from "styled-components";

export const TextStyled = styled.p`
  padding: ${(props) => props.padding};
  color: ${(props) => props.color || "#FFFFFF"};
  margin: ${(props) => props.margin || "0"};;
  margin-left: ${(props) => props?.marginLeft};
  margin-bottom: ${(props) => props?.marginBottom};
  font-weight: ${(props) => props?.fontWeight || "400"};
  font-family: Poppins, sans-serif;
  text-align: ${(props) => props?.textAlign};
  ${(props) =>
    css({
      ...props.theme[props.fontSize],
    })}// props?.type == "label"
    //   ? "18px"
    //   : props?.type == "title"
    //   ? "72px"
    //   : props?.type == "medio"
    //   ? "30px"
    //   : props?.type == "content"
    //   ? "44px"
    //   : "20px"};
`;

/*
<Text type=title> conteudo </Text>
*/
