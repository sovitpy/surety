import React from 'react';
import './userform.css';
import { useState } from 'react';

export default function Userform() {
  const [age, setAge] = useState('');
  const [income, setIncome] = useState('');
  const [family, setFamily] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const age = e.target.age.value;
    const income = e.target.income.value;
    const family = e.target.family.value;
    const url = e.target.url.value;
    if (!age) {
      alert('Please enter a valid age');
      return;
    }
    if (!income) {
      alert('Please enter a valid income');
      return;
    }
    if (!family) {
      alert('Please enter a valid family');
      return;
    }
    if (!url) {
      alert('Please enter a valid URL');
      return;
    } else {
      const zip = extractZip(url);
      console.log(age, income, family, zip);
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
      return 'No Zipcode Found';
    }
  };
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
              e.target.value[0] === '$' ? e.target.value : '$ ' + e.target.value
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
      </form>
    </div>
  );
}
