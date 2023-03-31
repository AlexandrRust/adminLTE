import { Link } from "react-router-dom";
import styled from "styled-components";

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-decoration: none;
  color: #c2c7d0;
  font-size: 14px;
  font-weight: 200;
  transition: color 0.6s ease-in-out;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
    transition: color 0.6s ease-in-out;
  }
`;
