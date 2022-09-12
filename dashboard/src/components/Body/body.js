import React, { Fragment, useState } from 'react';
import './userform.css';
import LoadingIndicator from './loader';
import Results from './Results';
import UserForm from './form';
import Header from '../Header/header';

export default function BodyComponent() {
  const [loadingState, setLoadingState] = useState('start');
  const [userValue, setUserValue] = useState(0);

  const changeLoadingStateHandler = (state) => {
    setLoadingState(state);
  };

  const handleReRender = () => {
    setLoadingState((prevState) => 'start');
  };

  const handleResult = (res) => {
    console.log(res);
    let userValVar = 0;
    const interval = setInterval(() => {
      if (userValVar >= res) {
        clearInterval(interval);
        console.log('done');
      } else {
        setUserValue(() => userValVar.toFixed(2));
        userValVar += 0.01;
      }
    }, 20);
  };

  return (
    <Fragment>
      <Header />
      <div className="user-form__container">
        {loadingState === 'loading' ? <LoadingIndicator /> : null}
        {loadingState === 'start' ? (
          <UserForm
            onFormSubmit={handleResult}
            onLoadingStateChange={changeLoadingStateHandler}
          />
        ) : null}
        {loadingState === 'result' ? (
          <div className="user-form__chart">
            {<Results value={userValue} onRestart={handleReRender} />}
          </div>
        ) : null}
      </div>
    </Fragment>
  );
}
