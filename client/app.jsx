'use strict';
const useState = React.useState;
const useEffect = React.useEffect;
const e = React.createElement;



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviewScores: {},
      reviewPosts: []
    }
  }

  componentDidMount() {
    fetch(`/reviews/3`)
      .then((res) => {
        return res.json()
      })
      .then((reviews) => {
        this.setState({ reviewPosts: reviews })
      })
    fetch('/reviews/scores/3')
      .then((res) => {
        return res.json()
      })
      .then((scores) => {
        this.setState({ reviewScores: scores })
        console.log(this.state)
      })
  }

  render() {
    return (
      <div>
        <div>
          <ReviewOverview scores={this.state.reviewScores} />
        </div>
        {this.state.reviewPosts.map((review) => {
          return <Review review={review} />
        })}
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

const domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);