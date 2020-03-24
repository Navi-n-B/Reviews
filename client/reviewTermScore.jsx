'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;

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
    <div>{props.term} {props.score}</div>
  )
}