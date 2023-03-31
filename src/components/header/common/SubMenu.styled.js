import styled from "styled-components";

export const SubMenu = styled.ul`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  overflow: hidden;
  /* height: ${(p) => (p.isOpen ? "100%" : "0px")}; */
  transition: height 0.6s ease-in-out;
`;
