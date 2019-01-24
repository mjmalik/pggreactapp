import React, { Component } from 'react';
import ReviewCard from '../components/ReviewCard';
const API = 'https://int-pg.guidanceguide.com/api/v1/';


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
    
        fetch(API + 'review?reviewID='+reviewID,{
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
            this.setState({ data: data, isLoading: false })
            if(data.status_code === 200){
              data.body.Results.map((review, index) =>{
                document.querySelector("html title").innerHTML = review.title;
                document.querySelector("#meta_description").content = review.shortDescription;
                document.querySelector("#og_title").content = review.title;
                document.querySelector("#og_url").content = window.location.href;
                document.querySelector("#og_image").content = review.coverPhoto.photoURL;
                document.querySelector("#og_description").content = review.shortDescription;
                document.querySelector("#twitter_site").content = window.location.href;
                document.querySelector("#twitter_title").content = review.title;
                document.querySelector("#twitter_image").content = review.coverPhoto.photoURL;
                document.querySelector("#twitter_description").content = review.shortDescription;
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