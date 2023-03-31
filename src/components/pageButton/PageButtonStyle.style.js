import styled from "styled-components";

export const PageButtonStyle = styled.button`
  padding: 8px 12px;
  border: 1px solid transparent;
  color: ${(props) => props.btnColor};
  background-color: ${(p) => p.background};
`;
