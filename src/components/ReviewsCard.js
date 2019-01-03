import React from 'react';
import { Link } from "react-router-dom";
const ReviewsCard  = props => {
    if(props.data.status_code !== 200){
        return props.data.message;
    }
    const reviews = props.data.body.Results.map((review, index) => {
        return <li key={index}>
            <Link to={review.href}>{review.title}</Link>        
        </li>;
    });
    return reviews;
}

export default ReviewsCard;