import React from 'react';
import './controlReview.css';
const ControlReview = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => (
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
);
export default ControlReview;
