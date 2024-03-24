const path = require('path');

// When the server runs, the html file that was created from the webpack will be sent to the client
module.exports = (app) =>
  app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  );
