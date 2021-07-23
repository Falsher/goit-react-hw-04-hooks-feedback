import React from 'react';
import './css/controlReview.css';
const ControlReview = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
  <section className="FeedbackOptions">
    <div className="Counter__controls">
      <button type="button" className="button" onClick={onIncrementGood}>
        Good
      </button>
      <button type="button" className="button" onClick={onIncrementNeutral}>
        Neutral
      </button>
      <button type="button" className="button" onClick={onIncrementBad}>
        Bad
      </button>
    </div>
  </section>
);
export default ControlReview;
