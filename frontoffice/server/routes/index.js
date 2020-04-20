const path = require('path');

module.exports = (app) => {
  app.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: `${path.resolve(__dirname, '../../')}/client/public`,
    });
  });
};
