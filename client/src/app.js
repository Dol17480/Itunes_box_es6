import React from 'react'
import ReactDOM from 'react-dom'
import TunesContainer from './containers/TunesContainer.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
import Pricing from './components/Pricing.jsx'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Home}>
        <IndexRoute component={TunesContainer} />
        <Route path="home" component={TunesContainer} />
        <Route path="about" component={About} />
        <Route path="pricing" component={Pricing} />
      </Route>
    </Router>,
    document.getElementById('app')
    );
};