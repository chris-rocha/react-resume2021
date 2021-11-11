import React, { Component } from "react"
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return(
            <ul className={this.props.className}>
                {this.props.routes
                    .filter(route => route.name !== 'NotFound')
                    .map((route, index) => (
                        <li key={ index }><NavLink to={route.path} className={({ isActive }) => isActive ? "router-link-exact-active" : "router-link"}>{route.name}</NavLink></li>
                    )
                )}
            </ul>
        )
    }
}
