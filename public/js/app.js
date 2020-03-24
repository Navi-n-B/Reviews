'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var useState = React.useState;
var useEffect = React.useEffect;
var e = React.createElement;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      reviewScores: {},
      reviewPosts: []
    };
    return _this;
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      fetch('/reviews/3').then(function (res) {
        return res.json();
      }).then(function (reviews) {
        _this2.setState({ reviewPosts: reviews });
      });
      fetch('/reviews/scores/3').then(function (res) {
        return res.json();
      }).then(function (scores) {
        _this2.setState({ reviewScores: scores });
        console.log(_this2.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(ReviewOverview, { scores: this.state.reviewScores })
        ),
        React.createElement(
          'div',
          null,
          React.createElement(ReviewFeed, { reviews: this.state.reviewPosts })
        )
      );
    }
  }]);

  return App;
}(React.Component);

{/* <div>
  <div id="review-overview">
   <ReviewOverview />
  </div>
  <div id="review-feed">
   <ReviewFeed />
  </div>
  </div> */}

var domContainer = document.querySelector('#app');
ReactDOM.render(e(App), domContainer);