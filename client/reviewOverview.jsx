'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;
import React from 'react';
import ReviewTermScore from './reviewTermScore.jsx'


// class ReviewOverview extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <div>
//         <div>
//           {props.scores.totalScore} {props.scores.numberOfReviews}
//         </div>
//         <div>
//           {/* <RevieTermScore /> */}
//         </div>
//       </div>
//     )
//   }
// }


const ReviewOverview = (props) => {
  var terms = ['Cleanliness', 'Communication', 'Check-in', 'Accuracy', 'Location', 'Value']
  var termScores = [];
  for (var key in props.scores) {
    if (key[0] === 'r')
      termScores.push(props.scores[key])
  }
  console.log(termScores)
  return (
    <div>
      <div id='star-and-totals'>
        <div>*</div>
        <div id='score-and-review-count'>
          <h1>{props.scores.totalScore} ({props.scores.numberOfReviews} reviews)</h1>
        </div>
      </div>
      <div id='review-terms-scores'>
        {termScores.map((score, index) => {
          return <ReviewTermScore score={score} term={terms[index]} />
        })}
      </div>
    </div>
  )
}

export default ReviewOverview;