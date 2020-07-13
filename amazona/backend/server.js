import express from 'express';
import data from './data';
import config from './config';
import mongoose from 'mongoose';

import bodyParser from 'body-parser';

import userRoutes from './routes/userRoutes';
import productsRoutes from './routes/productsRoutes';

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(err => console.log('===>',mongodbUrl,  err));

const app = express();

app.use(bodyParser.json());

app.use("/api/user", userRoutes);

app.use("/api/products", productsRoutes);

app.listen(5000, () => {
    console.log("Server started at port 5000");
});
