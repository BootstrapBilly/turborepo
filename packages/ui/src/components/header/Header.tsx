import React from "react";
import styled from "styled-components";

export interface IHeaderProps {
  children: React.ReactNode;
}

const HeaderContainer = styled.div`
  display: flex;
  background-color: white;
  padding: 10px 0;
`;

const Header = ({ children }: IHeaderProps) => (
  <HeaderContainer>{children}</HeaderContainer>
);

export default Header;
