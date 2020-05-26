const { Article } = require('../models');

exports.getArticles = (req, res) => {
  Article
    .find(req.query)
    .sort({ date: -1 })
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ err }));
};
