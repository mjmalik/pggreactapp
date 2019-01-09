/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Guides from './pages/Guides';
import Reviews from './pages/Reviews';
import Review from './pages/Review';

class App extends Component {
    render() {
        return (
            <Router>
              <div>
              <div className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand"  to="/">Guidance Guide</Link>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item active mr-2">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="nav-item mr-2">
                    <Link to="/guides/">Guides</Link>
                  </li>
                  <li className="nav-item mr-2">
                    <Link to="/reviews/">Reviews</Link>
                  </li>
                </ul>
              </div>  
              </div>      
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/guides/" component={Guides} />
                <Route path="/reviews/" component={Reviews} />
                <Route path="/review/:reviewID/:topic/:slug/" component={Review}/>
              </div>
              </div>
            </Router>
          );
    }
}

export default App;