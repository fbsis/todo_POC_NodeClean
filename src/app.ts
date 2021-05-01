import express from 'express'
import { MongoConfig } from './config/MongoConfig';
import { router } from './routes';

const app = express();

let mongo = new MongoConfig;
mongo.connect();

app.use(express.json())
app.use(router);

export { app }