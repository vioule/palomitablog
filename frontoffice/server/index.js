/* eslint-disable global-require */
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(
  process.env.DATABASE_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
).then(
  () => {
    require('./middlewares')(app);
    require('./routes')(app);
    app.listen(8080, () => console.log("L'application frontoffice de Palomita Blog écoute sur le port 8080."));
  },
).catch(
  (err) => console.log(`Impossible de se connecter à la base de donnée : ${err}`),
);
