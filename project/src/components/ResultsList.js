import React from 'react';
import './ResultsList.css';

const Result = ({ href, src }) => (
  <li className="results-list__item">
    <a href={href}>
      <div className="results-list__item__image">
        <img src={src} />
      </div>
    </a>
    
  </li>
);

const ResultsList = ({ results }) => {console.log(results); return (
  <div className="results-list">
    <h2 className="results-list__title">Your results</h2>
    <ul className="results-list__list">
      { results.map(result => (
          <li key={result.site}>
            <h3>{result.site}</h3>
            <ul className="results-list__list">
              { result.products.map(product => <Result key={product.src} {...product} />) }
            </ul>
          </li>
        )) }
    </ul>
  </div>
)};

export default ResultsList;
