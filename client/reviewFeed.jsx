'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;
import React from 'react';
import Review from './review.jsx';


const ReviewFeed = (props) => {
  console.log(233, props)
  return (
    <div>
      {props.reviews.map((review) => {
        return <Review review={review} />
      })}
    </div>
  )
}

export default ReviewFeed;