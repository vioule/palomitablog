import React from 'react';
import Header from './Header';
import Summary from './Summary';

export default ({ data, total, categorie }) => (
  <>
    <Header categorie={categorie} total={total} />
    {data.map((article, index) => (
      <Summary key={article._id} article={article} reverse={index % 2 === 0} />
    ))}
  </>
);
