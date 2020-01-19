import React from 'react';
import './ResultsList.css';

const Result = ({ site, href, src }) => (
  <li className="results-list__item">
    <a href={href}>
      <div className="results-list__item__image">
        <img src={src} />
      </div>
      <h3 className="results-list__item__title">{site}</h3>
    </a>
    
  </li>
);

const ResultsList = ({ results }) => {console.log(results); return (
  <div className="results-list">
    <h2 className="results-list__title">Your results</h2>
    <ul className="results-list__list">
      { results.map(result => <Result key={result.site} {...result} />) }
    </ul>
  </div>
)};

export default ResultsList;
