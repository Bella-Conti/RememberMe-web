import styled, { css } from "styled-components";

export const TagStyled = styled.div`
  background: ${(props) => props?.background};
  height: 20px;
  width: 20px;
  min-width: 20px;
  display: flex;
  border-radius: 3px;
  ${(props) =>
    css({
      ...props.theme[props.fontSize],
    })}
`;
