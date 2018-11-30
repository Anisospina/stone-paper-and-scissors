const express = require('express');
const app = express();

app.get('/', (_, res) => {
    res.json('online');
});

module.exports = app;