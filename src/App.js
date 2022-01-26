import React, { Component } from "react";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Section from "./components/Feedback/Section";
import Notification from "./components/Feedback/Notification";
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

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback =
      this.state.good + this.state.neutral + this.state.bad;
    const countPositiveFeedbackPercentage = Math.round(
      (this.state.good * 100) / countTotalFeedback
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onGood={this.handleOnGood}
            onNeutral={this.handleOnNeutral}
            onBad={this.handleOnBad}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
