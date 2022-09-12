import { useState } from 'react';
import axios from 'axios';

let result;

const UserForm = (props) => {
  const [loading, setLoading] = useState('start');
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [family, setFamily] = useState('');
  const [url, setUrl] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const extractZip = function (url) {
    var rx = /(?!\A)\b\d{5}(?:-\d{4})?\b/g;
    var arr = rx.exec(url);
    if (arr) {
      return arr[0];
    } else {
      return 0;
    }
  };

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
      props.onLoadingStateChange('loading');
      setValidationMessage(() => '');
      const data = {
        age: parseInt(age),
        income: parseInt(income.slice(2)),
        family: parseInt(family),
        zip: zip,
      };
      const apiUrl = 'https://suretyapi.itsmesovit.com/api/v1/predict';
      console.log(apiUrl);
      axios
        .post(apiUrl, data)
        .then((res) => {
          setLoading(() => 'result');
          console.log(res.data);
          result = res.data.probability;
          props.onFormSubmit(result);
          props.onLoadingStateChange('result');
        })
        .catch((err) => {
          setLoading(() => 'start');
          setValidationMessage(
            () => 'Error connecting to the API. Please try again!'
          );
        });
    }

    setAge('');
    setIncome('');
    setFamily('');
    setUrl('');
  };

  return (
    <div className="userform__box">
      <form className="userform" onSubmit={handleSubmit}>
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="text"
          name="age"
          value={age}
          placeholder="Enter your age"
          onChange={(e) => setAge(() => e.target.value)}
        />
        <label htmlFor="income">Income</label>
        <input
          id="income"
          type="text"
          name="income"
          value={income}
          placeholder="Enter your annual income"
          onChange={(e) =>
            setIncome(() =>
              e.target.value[0] === '$' ? e.target.value : '$ ' + e.target.value
            )
          }
        />
        <label htmlFor="family">Family size</label>
        <input
          id="family"
          type="text"
          name="family"
          value={family}
          placeholder="Enter your family size"
          onChange={(e) => setFamily(() => e.target.value)}
        />
        <label htmlFor="url">Listing URL</label>
        <input
          id="url"
          type="text"
          name="url"
          value={url}
          placeholder="Enter the listing URL"
          onChange={(e) => setUrl(() => e.target.value)}
        />

        <button className="submit-button">Calculate</button>
        {validationMessage && (
          <p className="validation-error">{validationMessage}</p>
        )}
      </form>
    </div>
  );
};

export default UserForm;
