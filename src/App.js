import React, { Component } from 'react';
import './scss/style.scss';
import About from './pages/About';

const date = new Date();
const year = date.getFullYear();

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentYear: year
        }
    }

    render() {
        return (
            <div className="app-wrap" id="app">
                <header id="header" className="landing-max-width">
                    <div className="container">
                        <h1>Chris Rocha</h1>
                        <ul className="menu">
                        <li></li>
                        </ul>
                    </div>
                </header>

                <main id="content" role="main" className="landing-max-width">
                    <div className="container">
                        <About />
                    </div>
                </main>

                <footer id="footer" className="landing-max-width">
                    <div className="container">
                        <hr />
                        <ul className="footer-menu clearfix">
                        <li></li>
                        </ul>
                        <p className="legal">© { this.state.currentYear } chrisrocha.com</p>
                    </div>
                </footer>
            </div>
        );
    }

}
