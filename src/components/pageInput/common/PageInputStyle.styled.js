import styled from "styled-components";

export const PageInputStyle = styled.input`
  height: calc(1.8125rem + 2px);
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  border: 1px solid #ced4da;
  &:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: inset 0 0 0 transparent;
  }
`;
