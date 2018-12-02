import express from 'express';
const app = express();

import notFount from './middleware/not-found';
import router from './routes/router';

const port = process.env.PORT || 3000;

app.use(router);
app.use(notFount);

app.listen(port, () => {
    const {pid} = process;
    console.log('[PID]', pid);
    console.log('Listen on', port);
});