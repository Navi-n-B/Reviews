'use strict';

var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;

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


var ReviewOverview = function ReviewOverview(props) {
  var terms = ['Cleanliness', 'Communication', 'Check-in', 'Accuracy', 'Location', 'Value'];
  var termScores = [];
  for (var key in props.scores) {
    if (key[0] === 'r') termScores.push(props.scores[key]);
  }
  console.log(termScores);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      props.scores.totalScore,
      ' ',
      props.scores.numberOfReviews
    ),
    React.createElement(
      'div',
      null,
      termScores.map(function (score, index) {
        return React.createElement(ReviewTermScore, { score: score, term: terms[index] });
      })
    )
  );
};