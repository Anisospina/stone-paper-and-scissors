const express = require('express');
const app = express();

const apiRouter = require('./api-router');

app.get('/', (_, res) => {
    res.json({online: true});
});

app.use('/api', apiRouter);

module.exports = app;