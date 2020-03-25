'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;
import React from 'react';
// class ReviewTermScore extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return <div>Hello world.</div>
//   }
// }

const ReviewTermScore = (props) => {
  return (
    <div id='review-term-block'>
      <div id='slim-block'>
        <div id='review-term'>{props.term}</div>
        <div id='bar-and-score'>
          <div id='outer-bar'><div id='inner-bar'></div></div>
          <div id='term-score'>{props.score}</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewTermScore;