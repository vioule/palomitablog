import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Summary from './Summary';

export default ({ data, total, categorie }) => {
  const count = total - data.length;
  return (
    <>
      <Header categorie={categorie} total={total} />
      {data.map((article, index) => (
        <Summary key={article._id} article={article} reverse={index % 2 === 0} />
      ))}
      {count && <Footer count={count} />}
    </>
  );
};
