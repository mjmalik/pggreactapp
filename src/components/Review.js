import React from 'react';
const ReviewCard  = props => {
    if(props.data.status_code !== 200){
        return props.data.message;
    }
    const reviews = props.data.body.Results.map((review, index) => {
        return <li key={index}>{review.title}</li>;
    });
    return reviews;
}

export default ReviewCard;