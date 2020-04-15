const express = require('express');

const app = express();

require('./middlewares')(app);
require('./routes')(app);

app.listen(8080, () => console.log('L\'application frontoffice de Palomita Blog écoute sur le port 8080.'));
