import React, { Component } from "react"
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <ul className={this.props.className}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? "router-link-exact-active" : "router-link"}>About</NavLink></li>
                <li><NavLink to="/code" className={({ isActive }) => isActive ? "router-link-exact-active" : "router-link"}>Code</NavLink></li>
                <li><NavLink to="/design" className={({ isActive }) => isActive ? "router-link-exact-active" : "router-link"}>Design</NavLink></li>
            </ul>
        )
    }
}
