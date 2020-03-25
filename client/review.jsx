'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;
import React from 'react';

const Review = (props) => {
  console.log(props)
  return (
    <div>
      <div>
        {props.review.createdBy}
      </div>
      <div>
        {props.review.reviewText}
      </div>
    </div>
  )
}

export default Review;