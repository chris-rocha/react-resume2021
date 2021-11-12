import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './scss/style.scss';
import 'animate.css';
import Layout from './components/Layout';
import About from './pages/About';
import Code from './pages/Code';
import Design from './pages/Design';
import NotFound from './pages/NotFound';
export default class App extends Component {

    render() {
        return (
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<About />} />
                    <Route path="code" element={<Code />} />
                    <Route path="design" element={<Design />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        );
    }

}
