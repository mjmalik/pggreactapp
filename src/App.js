/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Guides from './pages/Guides';
import Reviews from './pages/Reviews';
import ReviewCard from './components/Review';

const API = 'http://www.int-pg.guidanceguide.com/parentalguidance/api/v1/';

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
                    <Link to="/guides">Guides</Link>
                  </li>
                  <li className="nav-item mr-2">
                    <Link to="/reviews">Reviews</Link>
                  </li>
                </ul>
              </div>  
              </div>      
              <div className="container">
                <Route exact path="/" component={Home} />
                <Route path="/guides" component={Guides} />
                <Route path="/reviews" component={Reviews} />
              </div>
              </div>
            </Router>
          );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          data: {
            status_code: 200,
            message: 'Error loading data.',
            body: {
              Results: []
            }
          },
          isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
    
        fetch(API + 'review',{
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'oauth_consumer_key': 'el0fpnlzzcjnh0s8aowtmnpkluk64cnn',
            'oauth_consumer_secret': '88tpfkretevr8qh21ut1bdxh3c6bd82x',
            'oauth_token': 'cp4fsi7hzedjck6y8ae52oitu7tkrcwv',
            'oauth_secret': 'styhgnxnzq85k0ccpv69yg0os48umzqq',
          }
        })
          .then(response => response.json())
          .then(data => {
            this.setState({ data: data, isLoading: false })
          });
    }
    render() {
        const { data, isLoading } = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <ul><ReviewCard data={data} /></ul>
        )
    }
}

export default App;