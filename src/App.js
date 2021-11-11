import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import Navbar from './components/Navbar';
import About from './pages/About';
import Code from './pages/Code';
import Design from './pages/Design';
import NotFound from './pages/NotFound';

const date = new Date();
const year = date.getFullYear();

const routes = [
    { path: '/', name: 'About', Component: About },
    { path: '/code', name: 'Code', Component: Code },
    { path: '/design', name: 'Design', Component: Design },
    { path: '*', name: 'NotFound', Component: NotFound },
  ]


export default class App extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentYear: year
    //     }
    // }

    render() {
        return (
            <Router>
            <div className="app-wrap" id="app">
                <header id="header" className="landing-max-width">
                    <div className="container">
                        <h1>Chris Rocha</h1>
                        <Navbar className="menu" />
                    </div>
                </header>

                <main id="content" role="main" className="landing-max-width">
                    <div className="container">
                        <Routes>
                            {routes.map(({ path, Component }) => (
                                <Route key={path} path={path} element={ <Component /> } />
                            ))}
                        </Routes>
                    </div>
                </main>

                <footer id="footer" className="landing-max-width">
                    <div className="container">
                        <hr />
                        <Navbar className="footer-menu" />
                        <p className="legal">© { year } chrisrocha.com</p>
                    </div>
                </footer>
            </div>
            </Router>
        );
    }

}
