//express server es6
import express from 'express';
import bodyParser from 'body-parser';
import { EXPRESS_CONFIG } from './config/env';
import routes from './routes';
import { AppDataSource } from './data-source';
import cors from 'cors';
import { errorMessage } from './constants/message';

const { HOST, PORT } = EXPRESS_CONFIG;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(PORT, HOST, async () => {
    try {
        await AppDataSource.initialize();
    } catch (error) {
        console.log(JSON.stringify({
            from: 'app.listen',
            message: errorMessage.DATABASE_INITIALIZING_ERROR,
            error,
        }));
        process.exit(1);
    }

    console.log(`Server is running on http://${HOST}:${PORT}`);
});
