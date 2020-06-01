const express = require('express');
const { getArticles, appendArticles } = require('./controllers');

const ApiRouter = express.Router();
ApiRouter.get('/getArticles', getArticles);
ApiRouter.get('/appendArticles', appendArticles);

module.exports = ApiRouter;
