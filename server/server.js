const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serves static files in the entire client's dist folder
// dist folder is created with webpack build
app.use(express.static('../client/dist'));

app.get('/manifest.json', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/manifest.json'));
});

app.get('/service-worker.js', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'service-worker.js'));
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires HTML route
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
