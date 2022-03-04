import styled from "styled-components";

export interface IHeaderProps {
  children: React.ReactNode;
}

const HeaderContainer = styled.div`
  display: flex;
  background-color: red;
`;

const Header = ({ children }: IHeaderProps) => <HeaderContainer>{children}</HeaderContainer>

export default Header;
