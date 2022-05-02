import styled, { css } from "styled-components";

type TextStyledProps = {
  padding?: string;
  color?: string;
  margin?: string;
  marginLeft?: string;
  marginBottom?: string;
  fontWeight?: string;
  textAlign?: string;
  fontSize?: string;
};

export const TextStyled = styled.p<TextStyledProps>`
  padding: ${props => props?.padding};
  color: ${props => props?.color || "#FFFFFF"};
  margin: ${props => props?.margin || "0"};
  margin-left: ${props => props?.marginLeft};
  margin-bottom: ${props => props?.marginBottom};
  font-weight: ${props => props?.fontWeight || "400"};
  font-family: Poppins, sans-serif;
  text-align: ${props => props?.textAlign};
  ${props =>
    css({
      ...props.theme[props.fontSize || ""],
    })}
`;

/*
<Text type=title> conteudo </Text>
*/
