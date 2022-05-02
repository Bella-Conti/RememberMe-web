import styled, { css } from "styled-components";
import { fontSize } from "../../theme/global";

export const BoxStyled = styled.div`
  height: 31px;
  width: 40px;
  border: solid 1px white;
  color: #e5e5e5;
  cursor: pointer;
  display: flex;
  background: transparent;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  padding: 3px;

  ${(props) =>
    css({
      ...props?.theme[props.fontSize],
    })}
`;
