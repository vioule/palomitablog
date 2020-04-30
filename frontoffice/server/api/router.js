const express = require('express');
const { getArticles } = require('./controllers');

const ApiRouter = express.Router();
ApiRouter.get('/getArticles', getArticles);

module.exports = ApiRouter;
