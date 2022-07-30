// src/components/button/Button.tsx
import styled from "styled-components";
import { jsx } from "react/jsx-runtime";
var ButtonContainer = styled.button`
  padding: 1rem;
  background-color: blue;
`;
var Button = ({ label }) => /* @__PURE__ */ jsx(ButtonContainer, {
  children: label
});
var Button_default = Button;

// src/components/header/Header.tsx
import styled2 from "styled-components";
import { jsx as jsx2 } from "react/jsx-runtime";
var HeaderContainer = styled2.div`
  display: flex;
  background-color: white;
  padding: 10px 0;
`;
var Header = ({ children }) => /* @__PURE__ */ jsx2(HeaderContainer, {
  children
});
var Header_default = Header;
export {
  Button_default as Button,
  Header_default as Header
};
