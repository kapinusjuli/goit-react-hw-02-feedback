import React, { Component } from "react";
import Value from "../src/components/Feedback/Value";
import Controls from "./components/Feedback/Controls";
import "../src/components/Feedback/Counter.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleOnGood = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };

  handleOnNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleOnBad = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {}
  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / countTotalFeedback
    );

    return (
      <div className="Counter">
        <h2>Please leave feedback</h2>
        <Controls
          onGood={this.handleOnGood}
          onNeutral={this.handleOnNeutral}
          onBad={this.handleOnBad}
        />
        <div className="Counter__value">
          <Value value_good={good} value_neutral={neutral} value_bad={bad} />
          <div className="Counter__value">Total: {countTotalFeedback}</div>
          <div className="Counter__value">
            Positive feedback: {countPositiveFeedbackPercentage}%
          </div>
        </div>
      </div>
    );
  }
}

export default App;
