const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(`${path.resolve(__dirname, '../')}/client/public`));
app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.listen(8080, () => console.log('L\'application frontoffice de Palomita Blog écoute sur le port 8080.'));
