import React, { Component } from 'react';
import ConrolReview from './controlReview';
import ReviewsInfo from './reviewsInfo';
import Notification from './notificationReviews';
class ReviewCoffe extends Component {
  static defaultProps = {
    initial: 0,
  };
  state = {
    good: this.props.initial,
    neutral: this.props.initial,
    bad: this.props.initial,
  };
  handlIncrementGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handlIncrementNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handlIncrementBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good / countTotalFeedback) * 100,
    );

    return (
      <div className="Counter">
        <ConrolReview
          onIncrementGood={this.handlIncrementGood}
          onIncrementNeutral={this.handlIncrementNeutral}
          onIncrementBad={this.handlIncrementBad}
        />
        {countTotalFeedback > 0 ? (
          <ReviewsInfo
            stateGood={this.state.good}
            stateNeutral={this.state.neutral}
            stateBad={this.state.bad}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
export default ReviewCoffe;
