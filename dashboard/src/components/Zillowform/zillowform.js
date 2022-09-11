import React from 'react';
import './zillowform.css';
import { useState } from 'react';

export default function Zillowform() {
  const [url, setUrl] = useState('');
  const formHandler = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    if (!url) {
      alert('Please enter a valid URL');
    } else {
      console.log(extractSummary(url));
    }
    setUrl('');
  };

  const extractSummary = function (iCalContent) {
    var rx = /(?!\A)\b\d{5}(?:-\d{4})?\b/g;
    var arr = rx.exec(iCalContent);
    if (arr) {
      return arr[0];
    } else {
      return 'No Zipcode Found';
    }
  };
  return (
    <div>
      <form onSubmit={formHandler} className="urlform">
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
