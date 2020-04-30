const { Article } = require('../models');

exports.getArticles = (req, res) => {
  Article.find()
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ err }));
};
