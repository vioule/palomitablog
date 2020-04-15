const express = require('express');

const app = express();

require('./middlewares')(app);
require('./routes')(app);

app.listen(8081, () => console.log('L\'application backoffice de Palomita Blog écoute sur le port 8081.'));
