import React from 'react';
import './reviewsInfo.css';
const ReviewsInfo = ({
  stateGood,
  stateNeutral,
  stateBad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div className="Review">
    <span className="Review__goodValue">Good:{stateGood}</span>
    <span className="Review__neutralValue">Neutral:{stateNeutral}</span>

    <span className="Review__badValue">Bad:{stateBad}</span>
    <span className="Review__totalValue">Total:{countTotalFeedback}</span>
    <span className="Review__feedbackValue">
      Positive feedback:{countPositiveFeedbackPercentage}%
    </span>
  </div>
);
export default ReviewsInfo;
