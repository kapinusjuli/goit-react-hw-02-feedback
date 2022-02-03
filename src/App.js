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

  handleBtnClick = ({ target }) => {
    const feedbackType = target.dataset.action;
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const options = ["good", "neutral", "bad"];
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Math.round(
      (good * 100) / countTotalFeedback
    );

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            clickHandler={this.handleBtnClick}
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
