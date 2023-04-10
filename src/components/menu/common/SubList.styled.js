import styled from "styled-components";

export const SubList = styled.ul`
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  visibility: ${(p) => p.hidden && "hidden"};
  height: ${(p) => p.hidden && "0"};
`;
