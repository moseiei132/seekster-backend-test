//express server es6
import express from 'express';
import bodyParser from 'body-parser';
import { EXPRESS_CONFIG } from './config/env';
import routes from './routes';
import { AppDataSource } from './data-source';

const { HOST, PORT } = EXPRESS_CONFIG;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.listen(PORT, HOST, async () => {
    try {
        await AppDataSource.initialize();
    } catch (error) {
        console.log(JSON.stringify({
            from: 'app.listen',
            message: 'Error while initializing database',
            error,
        }));
    }

    console.log(`Server is running on http://${HOST}:${PORT}`);
});
