import styled from "styled-components";

export const HeaderBox = styled.div`
  background-color: ${(p) => p.theme.colors.primary};
  border-bottom: 1px solid ${(p) => p.theme.borderColors.primary};
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  gap: 20px;
`;
