import 'reflect-metadata';
import { AppDataSource } from "./config/database";
import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

app.use(bodyParser.json());
app.use('/api', productRoutes);
app.use('/api', userRoutes);
app.use(errorHandler);

const port = process.env.PORT || 3000;

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((error) => console.log('Error during Data Source initialization', error));