import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';
const API = 'https://int-pg.guidanceguide.com//api/v1/';


class Review extends Component {
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
        const reviewID = this.props.match.params.reviewID;
        const self = this;
    
        fetch(API + 'review?reviewID='+reviewID,{
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
            console.log(self);
            if(data.status_code === 200){
              data.body.Results.map((review, index) =>{
                document.querySelector("html title").innerHTML = review.title;
              });
            }
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

export default Review;