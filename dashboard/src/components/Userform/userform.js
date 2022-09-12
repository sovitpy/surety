import React from 'react';
import './userform.css';
import { useState } from 'react';
import axios from 'axios';
import LoadingIndicator from './loader';

export default function Userform() {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [family, setFamily] = useState('');
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState('start');
  const [validationMessage, setValidationMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = e.target.age.value;
    const income = e.target.income.value;
    const family = e.target.family.value;
    const url = e.target.url.value;
    const expression =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const urlRegex = new RegExp(expression);
    if (!age || isNaN(age)) {
      setValidationMessage(() => 'Please enter a valid age');
      return;
    }
    if (!income || isNaN(income.slice(2))) {
      setValidationMessage(() => 'Please enter a valid income');
      return;
    }
    if (!family || isNaN(family)) {
      setValidationMessage(() => 'Please enter a valid family size');
      return;
    }
    if (!url || !url.match(urlRegex) || !url.includes('zillow')) {
      setValidationMessage(() => 'Please enter a valid URL');
      return;
    } else {
      const zip = extractZip(url);
      if (!zip) {
        setValidationMessage(() => 'Please enter a valid listing URL');
        return;
      }
      setLoading(() => 'loading');
      setValidationMessage(() => '');
      const data = {
        age: parseInt(age),
        income: parseInt(income.slice(2)),
        family: parseInt(family),
        zip: zip,
      };
      const apiUrl = 'https://suretyapi.itsmesovit.com/api/v1/predict';
      console.log(apiUrl);
      axios.post(apiUrl, data).then((res) => {
        setLoading(() => 'start');
        console.log(res.data);
      }).catch((err) => {
        setLoading(() => 'start');
        setValidationMessage(() => 'Error connecting to the API. Please try again!')
      });;
    }

    setAge('');
    setIncome('');
    setFamily('');
    setUrl('');
  };

  const extractZip = function (url) {
    var rx = /(?!\A)\b\d{5}(?:-\d{4})?\b/g;
    var arr = rx.exec(url);
    if (arr) {
      return arr[0];
    } else {
      return 0;
    }
  };

  if (loading === 'loading') {
    return <LoadingIndicator />;
  } else if (loading === 'start') {
    return (
      <div>
        <form className="userform" onSubmit={handleSubmit}>
          <input
            type="text"
            name="age"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => setAge(() => e.target.value)}
          />
          <input
            type="text"
            name="income"
            value={income}
            placeholder="Enter your income"
            onChange={(e) =>
              setIncome(() =>
                e.target.value[0] === '$'
                  ? e.target.value
                  : '$ ' + e.target.value
              )
            }
          />
          <input
            type="text"
            name="family"
            value={family}
            placeholder="Enter your family size"
            onChange={(e) => setFamily(() => e.target.value)}
          />
          <input
            type="text"
            name="url"
            value={url}
            placeholder="Enter the listing URL"
            onChange={(e) => setUrl(() => e.target.value)}
          />
          <input className="submitbutton" type="submit" value="Calculate" />
          {validationMessage ? (
            <p className="validation-error">{validationMessage}</p>
          ) : null}
        </form>
      </div>
    );
  }
}
