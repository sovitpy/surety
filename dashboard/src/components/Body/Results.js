import { Fragment, useState } from 'react';
import './userform.css';
import ReactStoreIndicator from 'react-score-indicator';

const chartColors = [
  '#3da940',
  '#3da940',
  '#3da940',
  '#53b83a',
  '#84c42b',
  '#f1bc00',
  '#ed8d00',
  '#d12000',
];

const Results = (props) => {
  return (
    <Fragment>
      <h3 className="result_heading">Gentrification Vulnerability Index</h3>
      <ReactStoreIndicator
        stepsColors={chartColors}
        value={props.value}
        maxValue={1}
        style={{ marginBottom: '0.3rem' }}
      />
      <button className="restart_btn" onClick={props.onRestart}>
        Calculate Again
      </button>
    </Fragment>
  );
};

export default Results;
