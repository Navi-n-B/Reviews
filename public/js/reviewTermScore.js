'use strict';

var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;

// class ReviewTermScore extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return <div>Hello world.</div>
//   }
// }

var ReviewTermScore = function ReviewTermScore(props) {
  return React.createElement(
    'div',
    null,
    props.term,
    ' ',
    props.score
  );
};