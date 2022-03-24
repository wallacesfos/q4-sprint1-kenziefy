import express from 'express';
import { router } from './routes/users';
import listEndpoints from 'express-list-endpoints';

const app = express();

app.use(express.json());

app.use(router)

console.log(listEndpoints(app))

export { app }