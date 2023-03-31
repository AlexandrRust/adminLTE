import styled from "styled-components";

export const NavBarWrapper = styled.div`
  height: 100vh;
  background-color: #343a40;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: ${(p) => p.width};
  transition: width 0.6s ease-in-out;
  overflow: hidden;
  &:hover {
    width: ${(p) => p.width};
    transition: width 0.6s ease-in-out;
  }
`;
