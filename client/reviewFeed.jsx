'use strict';
import React from 'react';
import Review from './review.jsx';


const ReviewFeed = (props) => {
  console.log(233, props)
  return (
    <div id="review-feed">
      {props.reviews.map((review) => {
        return <Review review={review} />
      })}
    </div>
  )
}

export default ReviewFeed;