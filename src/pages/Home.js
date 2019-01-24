import React, { Component } from 'react';
import ReviewsCard from '../components/ReviewsCard';

const API = 'https://int-pg.guidanceguide.com/api/v1/';

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
            'oauth_token': 'wj8w7ogqsmswcqomr8y49m89ma5guthn',
            'oauth_secret': 'nrysnqgxvuejf3erueesg3e93xgxfk1g',
          }
        })
          .then(response => response.json())
          .then(data => {
            this.setState({ data: data, isLoading: false });            
          });
    }
    render() {
        const { data, isLoading } = this.state;
        document.querySelector("html title").innerHTML = process.env.REACT_APP_TITLE;
        if (isLoading) {
            return <p>Loading ...</p>;
        }
        return (
            <ul><ReviewsCard data={data} /></ul>
        )
    }
}

export default Home;