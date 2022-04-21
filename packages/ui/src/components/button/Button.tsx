import React from "react";
import styled from "styled-components";

export interface ButtonProps {
  label: string;
}

const ButtonContainer = styled.button`
  padding: 1rem;
  background-color: blue;
`;

const Button = ({ label }: ButtonProps) => (
  <ButtonContainer>{label}</ButtonContainer>
);

export default Button;
