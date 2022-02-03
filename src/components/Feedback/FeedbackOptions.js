import React from "react";

const btn = ({ feedbackType, clickHandler }) => {
  return (
    <button
      className="Counter__controls"
      key={feedbackType}
      data-action={feedbackType}
      onClick={clickHandler}
    >
      {feedbackType}
    </button>
  );
};

function FeedbackOptions({ options, clickHandler }) {
  return options.map((option) => btn({ feedbackType: option, clickHandler }));
}

export default FeedbackOptions;
