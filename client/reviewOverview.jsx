'use strict';
import React from 'react';
import ReviewTermScore from './reviewTermScore.jsx'

const ReviewOverview = (props) => {
  var terms = ['Cleanliness', 'Communication', 'Check-in', 'Accuracy', 'Location', 'Value']
  var termScores = [];
  for (var key in props.scores) {
    if (key[0] === 'r')
      termScores.push(props.scores[key])
  }

  return (
    < div id="review-overview" >
      <div id='star-and-totals'>
        <div id='star-img'>&#9733;</div>
        <div id='score-and-review-count'>
          <h1>{Number(props.scores.totalScore).toFixed(2)} ({props.scores.numberOfReviews} reviews)</h1>
        </div>
      </div>
      <div id='review-terms-scores'>
        {termScores.map((score, index) => {
          return <ReviewTermScore score={score} term={terms[index]} />
        })}
      </div>
    </div >
  )
}

export default ReviewOverview;