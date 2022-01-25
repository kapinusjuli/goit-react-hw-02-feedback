import React from "react";

const Value = ({ value_good, value_neutral, value_bad }) => (
  <div>
    <h2>Statistics</h2>
    <div className="Counter__value">
      <div>Good: {value_good}</div>
      <div>Neutral: {value_neutral}</div>
      <div>Bad: {value_bad}</div>
    </div>
  </div>
);

export default Value;
