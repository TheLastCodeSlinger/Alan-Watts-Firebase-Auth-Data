import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";

const NavbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  top: 0;
  background-color: ${(props) => props.theme.colors.lighter};
  positon: absolute;
  display: flex;
  align-items: center;
`;

const NavItems = styled.ul`
  text-decoration: none;
  display: flex;
  width: 90%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
`;

const NavLinks = styled(NavLink)`
  padding: 5px;
  text-decoration: none;
  fontsize: 20px;
  display: inline-flex;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.main};
  &:hover {
    background-color: ${(props) => props.theme.colors.text};
  }
  &.active {
    background-color: ${(props) => props.theme.colors.text};
  }
`;

export default function Navbar() {
  const { currentUser, logout } = useAuth();
  return (
    <NavbarWrapper>
      <NavItems>
        <NavLinks to="/content">Content</NavLinks>
        <NavLinks to="/quotes">Quotes</NavLinks>
        {currentUser ? (
          <>
            <NavLinks to="/bookmarks">Bookmarks</NavLinks>
            <div onClick={logout}>
              <NavLinks to="/content">Logout</NavLinks>
            </div>
          </>
        ) : (
          <NavLinks to="/login">Login</NavLinks>
        )}
      </NavItems>
    </NavbarWrapper>
  );
}
