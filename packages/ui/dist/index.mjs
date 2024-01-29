// src/components/button/Button.tsx
import React from "react";
import styled from "styled-components";
var ButtonContainer = styled.button`
  padding: 1rem;
  background-color: blue;
`;
var Button = ({ label }) => /* @__PURE__ */ React.createElement(ButtonContainer, null, label);
var Button_default = Button;

// src/components/header/Header.tsx
import React2 from "react";
import styled2 from "styled-components";
var HeaderContainer = styled2.div`
  display: flex;
  background-color: white;
  padding: 11px 0;
`;
var Header = ({ children }) => /* @__PURE__ */ React2.createElement(HeaderContainer, null, children);
var Header_default = Header;
export {
  Button_default as Button,
  Header_default as Header
};
