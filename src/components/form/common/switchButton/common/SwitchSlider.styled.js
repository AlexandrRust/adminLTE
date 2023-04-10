import styled from "styled-components";

export const SwitchSlider = styled.span`
  width: 50%;
  height: 100%;
  background-color: #fff;
  display: inline-block;
  /* position: absolute; */
  /* top: 0; */
  /* left: 0; */
  transition: left 0.6s ease-in-out;
  transition: right 0.6s ease-in-out;
  /* &::after {
    content: "OFF";
    display: block;
    position: absolute;
    border: none;
    right: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: red;
  }
  &::before {
    content: "ON";
    display: block;
    position: absolute;
    border: none;
    right: +100%;
    top: 50%;
    width: 100%;
    height: 100%;
    background-color: green;
  } */
`;
