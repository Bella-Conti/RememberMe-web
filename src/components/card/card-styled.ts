import styled from "styled-components";

export const CardStyled = styled.div`
  height: 150px;
  width: 471px;
  background: rgba(59, 74, 182, 0.38);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  position: relative;
`;

export const CardTitle = styled.p`
  color: #e5e5e5;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  margin-top: auto;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 10px;
`;
