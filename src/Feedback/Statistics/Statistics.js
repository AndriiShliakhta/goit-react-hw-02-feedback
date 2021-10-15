import React from 'react';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.statItems}>
        <span>Good:</span>
        <span> {good}</span>
      </div>
      <div className={styles.statItems}>
        <span>Neutral:</span>
        <span> {neutral}</span>
      </div>
      <div className={styles.statItems}>
        <span>Bad:</span>
        <span> {bad}</span>
      </div>
      <div className={styles.statItems}>
        <span>Total:</span>
        <span> {total()}</span>
      </div>
      <div className={styles.statItems}>
        <span>Positive feedback:</span>
        <span>{!positivePercentage() ? '0' : positivePercentage()}%</span>
      </div>
    </div>
  );
};

export default Statistics;
