'use strict';
import React from 'react';

const ReviewTermScore = (props) => {
  return (
    <div id='review-term-block'>
      <div id='slim-block'>
        <div id='review-term'>{props.term}</div>
        <div id='bar-and-score'>
          <div id='outer-bar'><div id='inner-bar' style={{ width: props.score * 20 + '%' }}></div></div>
          <div id='term-score'>{props.score}</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTermScore;