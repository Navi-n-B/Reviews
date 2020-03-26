'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;
import React from 'react';
import ReviewOverview from './reviewOverview.jsx';
import ReviewFeed from './reviewFeed.jsx';
import Review from './review.jsx';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewScores: {},
      reviewPosts: []
    }
    this.id = location.pathname.split('/reviews/')[1];
  }


  componentDidMount() {
    console.log(24, 'app component mounted')
    fetch(`/api/reviews/${this.id}`)
      .then((res) => {
        return res.json()
      })
      .then((reviews) => {
        this.setState({ reviewPosts: reviews })
      })
      .catch((err) => {
        res.status(500)
      })
    fetch(`/api/reviews/scores/${this.id}`)
      .then((res) => {
        return res.json()
      })
      .then((scores) => {
        this.setState({ reviewScores: scores })
        console.log(this.state)
      })
      .catch((err) => {
        res.status(500)
      })
  }

  render() {
    return (
      <div>
        <div>
          <ReviewOverview scores={this.state.reviewScores} />
        </div>
        <div id='review-feed'>
          {this.state.reviewPosts.map((review) => {
            return <Review review={review} />
          })}
        </div>
        {/* <div>
          <ReviewFeed reviews={this.state.reviewPosts} />
        </div> */}
      </div>
    )


  }
}

{/* <div>
<div id="review-overview">
  <ReviewOverview />
</div>
<div id="review-feed">
  <ReviewFeed />
</div>
</div> */}

// const domContainer = document.querySelector('#app');
// ReactDOM.render(e(App), domContainer);
export default App;