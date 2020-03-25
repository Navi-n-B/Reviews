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
    { id: 'review-term-block' },
    React.createElement(
      'div',
      { id: 'slim-block' },
      React.createElement(
        'div',
        { id: 'review-term' },
        props.term
      ),
      React.createElement(
        'div',
        { id: 'bar-and-score' },
        React.createElement(
          'div',
          { id: 'outer-bar' },
          React.createElement('div', { id: 'inner-bar' })
        ),
        React.createElement(
          'div',
          { id: 'term-score' },
          props.score
        )
      )
    )
  );
};