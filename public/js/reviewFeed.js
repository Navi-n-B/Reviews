'use strict';

var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;

var ReviewFeed = function ReviewFeed(props) {
  console.log(233, props);
  return React.createElement(
    'div',
    null,
    props.reviews.map(function (review) {
      return React.createElement(Review, { review: review });
    })
  );
};