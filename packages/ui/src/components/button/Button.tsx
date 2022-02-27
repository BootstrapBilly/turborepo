import React from "react";

export interface ButtonProps {
  label: "a" | "b";
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
