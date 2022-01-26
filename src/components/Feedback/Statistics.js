import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <div className="Counter__value">
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>
      <div>Total: {total}</div>
      <div>Positive feedback: {positivePercentage}%</div>
    </div>
  </div>
);

Statistics.propTypes = {
  Good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;
