import React, { Component } from 'react';
class FeedbackOptions extends Component {
  render() {
    return (
      <>
        <h3>Please leave feedback</h3>
        <button
          type="button"
          name="goodfeedback"
          onClick={this.props.onLeaveFeedback}
        >
          Good
        </button>
        <button
          type="button"
          name="neutralfeedback"
          onClick={this.props.onLeaveFeedback}
        >
          Neutral
        </button>
        <button
          type="button"
          name="badfeedback"
          onClick={this.props.onLeaveFeedback}
        >
          Bad
        </button>
      </>
    );
  }
}
export default FeedbackOptions;
