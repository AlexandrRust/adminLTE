import styled from "styled-components";

export const MenuItemTitle = styled.h4`
  margin: 0;
  padding: 6px 10px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #c2c7d0;
  border-radius: 4px;
  transition: color 0.2s ease-in-out;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover,
  :active {
    color: #fff;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.1);
    transition: background-color 0.2s ease-in-out;
    transition: color 0.2s ease-in-out;
  }
`;
