import styled from "styled-components";

export const ButtonStyled = styled.button`
  border: none;
  width: 405px;
  height: 50px;
  margin-bottom: ${(props) => props?.marginBottom};
  border-radius: 5px;
  background: linear-gradient(50.77deg, #7f0e96 8.84%, #ff73b6 85.43%);
  color: #e5e5e5;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  display: ${(props) => (props.icon ? "flex" : "block")};
  justify-content: ${(props) => (props.icon ? "space-between" : "unset")};
  padding: 0 1.35rem;
  align-items: center;
  cursor: pointer;

  ::after {
    font-family: "Material Icons" ${props=> console.log(props)};
    content: ${(props) => `'${props?.icon.props.name}'`};
  }
`;
