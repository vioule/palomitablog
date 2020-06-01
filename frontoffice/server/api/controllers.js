const { Article } = require('../models');

const getData = (categorie = { $exists: true }, skip = 0) => {
  const max = 5;
  return (
    Article
      .find({ categorie })
      .sort({ date: -1 })
      .skip(skip)
      .limit(max)
  );
};

const getCount = (categorie) => (
  categorie
    ? Article
      .countDocuments({ categorie })
    : Article
      .estimatedDocumentCount()
);

exports.getArticles = async (req, res) => {
  const { categorie, skip } = req.query;
  try {
    const data = await getData(categorie, parseInt(skip, 10));
    const total = await getCount(categorie);
    res.status(200).send({ data, total });
  } catch (err) {
    res.status(500).send({ err });
  }
};

exports.appendArticles = async (req, res) => {
  const { categorie, skip } = req.query;
  try {
    const data = await getData(categorie, parseInt(skip, 10));
    res.status(200).send({ data });
  } catch (err) {
    res.status(500).send({ err });
  }
};
