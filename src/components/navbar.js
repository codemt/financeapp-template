import React, { Component } from 'react'
import { Navbar , NavItem } from 'react-materialize';
import {  NavLink } from 'react-router-dom';
 class NavBar extends Component {
  render() {
    return (
        <Navbar brand='Finance App'right style={{backgroundColor:"#2c3e50"}}>
        <NavItem href="/about" to="/about">About us </NavItem>
        <NavItem href="/team" to="/team">Our Professionals</NavItem>
      </Navbar>
    )
  }
}
export default NavBar;