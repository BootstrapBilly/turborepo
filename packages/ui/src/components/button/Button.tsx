import React from "react";
import styled from "styled-components";
export interface ButtonProps {
  label: "a" | "b";
}

const ButtonContainer = styled.button`
  padding: 1rem;
  background-color: blue;
`;

const Button = (props: ButtonProps) => {
  return <ButtonContainer>{props.label}</ButtonContainer>;
};

export default Button;
