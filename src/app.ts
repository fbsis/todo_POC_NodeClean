import express from 'express'
import cors  from "cors";
import { MongoConfig } from './config/MongoConfig';
import { router } from './routes';

const app = express();

let mongo = new MongoConfig;
mongo.connect();

app.use(cors())
app.use(express.json())
app.use(router);

export { app }