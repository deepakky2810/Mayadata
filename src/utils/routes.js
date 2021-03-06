import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from '../views/AboutPage';
import Home from '../views/HomePage';

import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        )
    }
}