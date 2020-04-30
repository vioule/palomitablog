const path = require('path');
const ApiRouter = require('./api/router');

module.exports = (app) => {
  app.use('/api', ApiRouter);
  app.get('*', (req, res) => {
    res.sendFile('index.html', {
      root: `${path.resolve(__dirname, '../')}/client/public`,
    });
  });
};
