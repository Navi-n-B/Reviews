'use strict';
const moment = require('moment')
import React from 'react';

const Review = (props) => {
  return (
    <div id='review-block'>
      <div id='review-creator-created-block'>
        <div id='reviewer-pic'>
          <img id='profile-img' src={props.review.userProfilePicUrl}></img>
        </div>
        <div id='creator-created'>
          {props.review.userFirstName}
          <div id='review-date'>
            {moment(props.review.reviewDate).format("MMMM YYYY")}
          </div>
        </div>
      </div>
      <div id='review-text'>
        {props.review.reviewText}
      </div>
    </div>
  )
}

export default Review;