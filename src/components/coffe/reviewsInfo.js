import React from 'react';
import './css/reviewsInfo.css';
const ReviewsInfo = ({
  stateGood,
  stateNeutral,
  stateBad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <section className="Statistics">
    <div className="Review">
      <span className="Review__goodValue">Good:{stateGood}</span>
      <span className="Review__neutralValue">Neutral:{stateNeutral}</span>

      <span className="Review__badValue">Bad:{stateBad}</span>
      <span className="Review__totalValue">Total:{countTotalFeedback}</span>
      <span className="Review__feedbackValue">
        Positive feedback:{countPositiveFeedbackPercentage}%
      </span>
    </div>
  </section>
);
export default ReviewsInfo;
