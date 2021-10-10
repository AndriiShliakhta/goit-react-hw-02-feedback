import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
// import styles from './Profile.module.css';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class Feedback extends Component {
  state = {
    goodfeedback: 0,
    neutralfeedback: 0,
    badfeedback: 0,
  };

  onLeaveFeedback = evt => {
    const { step } = this.props;
    this.setState(state => ({
      [evt.target.name]: state[evt.target.name] + step,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => {
      acc += value;
      return acc;
    });
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round(
      100 / (this.countTotalFeedback() / this.state.goodfeedback),
    );
  };

  render() {
    const { goodfeedback, neutralfeedback, badfeedback } = this.state;
    return (
      <>
        <FeedbackOptions
          // options={ }
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {goodfeedback || neutralfeedback || badfeedback ? (
          <Statistics
            good={goodfeedback}
            neutral={neutralfeedback}
            bad={badfeedback}
            total={this.countTotalFeedback}
            positivePercentage={this.countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given"></Notification>
        )}
      </>
    );
  }
}
export default Feedback;
Feedback.propTypes = {
  goodfeedback: PropTypes.number,
  neutralfeedback: PropTypes.number,
  badfeedback: PropTypes.number,
};
