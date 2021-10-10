import React, { Component } from 'react';
class Statistics extends Component {
  render() {
    return (
      <>
        <h3>Statistics</h3>
        <div>
          Good:
          <span> {this.props.good}</span>
        </div>
        <div>
          Neutral:
          <span> {this.props.neutral}</span>
        </div>
        <div>
          Bad:
          <span> {this.props.bad}</span>
        </div>
        <div>
          Total:
          <span> {this.props.total()}</span>
        </div>
        <div>
          Positive feedback:
          <span>
            {!this.props.positivePercentage()
              ? '0'
              : this.props.positivePercentage()}
            %
          </span>
        </div>
      </>
    );
  }
}
export default Statistics;
