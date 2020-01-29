import React from "react"
import styled from "styled-components"
import { NavLink } from "react-router-dom"

const Nav = styled.nav`
  background-color: #2c3e50;
  & > ul {
    display: block;
    width: 90%;
    margin: 0 auto;
    padding: 0;
    display: flex;
    justify-content: space-around;
    list-style-type: none;
  }
`
const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: #bdc3c7;
  text-decoration: none;
  padding: 15px 15px;
  font-weight: bold;
  font-size: 1.1rem;
  text-shadow: 0.1px 0.1px 0.1px #2c3e50;
  opacity: 0.8;
  transition: all 0.2s ease;
  &.active {
    color: #ecf0f1;
    opacity: 1;
  }
`
const isActive = (path, match, location) => !!(match || path === location.pathname)

const Navigation = () => {
  return (
    <Nav>
      <ul>
        <li>
          <StyledNavLink to='/' isActive={isActive.bind(this, "/")}>
            Color Palette
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to='/selected-colors' isActive={isActive.bind(this, "/selected-colors")}>
            Selected Colors
          </StyledNavLink>
        </li>
      </ul>
    </Nav>
  )
}

export default Navigation
