//express server es6
import express from 'express';
import bodyParser from 'body-parser';
import { EXPRESS_CONFIG } from './config/env';
import routes from './routes';

const { HOST, PORT } = EXPRESS_CONFIG;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
