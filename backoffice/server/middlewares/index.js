/* eslint-disable global-require */
const path = require('path');
const express = require('express');

module.exports = (app) => {
  app.use(express.static(`${path.resolve(__dirname, '../../')}/client/public`));
  if (process.env.NODE_ENV === 'development') {
    require('./development')(app);
  }
};
