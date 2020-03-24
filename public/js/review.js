'use strict';

var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;

var Review = function Review(props) {
  console.log(props);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      props.review.createdBy
    ),
    React.createElement(
      'div',
      null,
      props.review.reviewText
    )
  );
};