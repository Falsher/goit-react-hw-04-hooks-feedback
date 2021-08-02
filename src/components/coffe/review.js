import { useState } from 'react';
import ConrolReview from './controlReview';
import ReviewsInfo from './reviewsInfo';
import Notification from './notificationReviews';
export default function ReviewCoffe() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const handlIncrementGood = () => {
    setGood(prevState => prevState + 1);
  };
  const handlIncrementNeutral = () => {
    setNeutral(prevState => prevState + 1);
  };
  const handlIncrementBad = () => {
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good / countTotalFeedback) * 100,
  );

  return (
    <div className="Counter">
      <ConrolReview
        onIncrementGood={handlIncrementGood}
        onIncrementNeutral={handlIncrementNeutral}
        onIncrementBad={handlIncrementBad}
      />
      {countTotalFeedback > 0 ? (
        <ReviewsInfo
          stateGood={good}
          stateNeutral={neutral}
          stateBad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}
