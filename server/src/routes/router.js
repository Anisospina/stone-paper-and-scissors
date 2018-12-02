import express from 'express';
const app = express();

import apiRouter from './api-router';

app.get('/', (_, res) => {
    res.json({online: true});
});

app.use('/api', apiRouter);

export default app;