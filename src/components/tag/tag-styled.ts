import styled, { css } from "styled-components";

type TagStyledProps = {
  background?: string;
  fontSize?: string;
};

export const TagStyled = styled.div<TagStyledProps>`
  background: ${props => props?.background};
  height: 20px;
  width: 66px;
  min-width: 20px;
  display: flex;
  border-radius: 3px;
  ${props =>
    css({
      ...props.theme[props?.fontSize || ""],
    })}
`;
