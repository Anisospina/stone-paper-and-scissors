const express = require('express');
const app = express();

const notFount = require('./middleware/not-found');
const router = require('./routes/router');

const port = process.env.PORT || 3000;

app.use(router);
app.use(notFount);

app.listen(port, () => {
    console.log('Listen on', port);
});