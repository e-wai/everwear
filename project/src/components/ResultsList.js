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

const ResultsList = ({ results, searchImg, q }) => {
  console.log(results);
  const qspan = q ? <span className='results-list__q'> in {q}</span> : null
  return (
    <div className="results-list">
      <h2 className="results-list__title">You searched for <img className='results-list__og' src={searchImg}/> {q && `in ${q}`}</h2>
      <div className="results-list__list">
        { results.map(result => (
            <li key={result.site}>
              <h3>{result.site}</h3>
              <ul className="results-list__row">
                { result.products.map(product => <Result key={product.src} {...product} />) }
              </ul>
            </li>
          )) }
      </div>
    </div>
)};

export default ResultsList;
