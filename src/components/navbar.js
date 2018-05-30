import React, { Component } from 'react'
import { Navbar , NavItem } from 'react-materialize';
import {  NavLink } from 'react-router-dom';
 class NavBar extends Component {
  render() {
    return (
        <div>
        <Navbar brand='Finance App'right style={{backgroundColor:"#2c3e50"}}>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
      </Navbar>
      </div>
    )
  }
}
export default NavBar;