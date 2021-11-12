import React, { Component } from 'react';
import { Outlet } from 'react-router';
import Navbar from './Navbar';

const date = new Date();
const year = date.getFullYear();
const routes = [
    { path: '/', name: 'About' },
    { path: '/code', name: 'Code' },
    { path: '/design', name: 'Design' },
    { path: '*', name: 'NotFound' },
]
export default class Layout extends Component {

    render() {
        return (
            <div className="app-wrap" id="app">
                <header id="header" className="landing-max-width">
                    <div className="container">
                        <h1>Chris Rocha</h1>
                        <Navbar routes={routes} className="menu" />
                    </div>
                </header>

                <main id="content" role="main" className="landing-max-width">
                    <div className="container">
                        <Outlet />
                    </div>
                </main>

                <footer id="footer" className="landing-max-width">
                    <div className="container">
                        <hr />
                        <Navbar routes={routes} className="footer-menu" />
                        <p className="legal">© { year } chrisrocha.com</p>
                    </div>
                </footer>
            </div>
        );
    }

}
