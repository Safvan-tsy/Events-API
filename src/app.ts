import express, { Express } from 'express';
import cookieParser from 'cookie-parser';


import helmet from 'helmet';
import mongoSanitize from 'express-mongo-sanitize';


const app: Express = express();

app.use(helmet());
app.use(express.json({limit:'2mb'}));
app.use(express.urlencoded({ extended: true, limit: '2mb' }));
app.use(cookieParser());

app.use(mongoSanitize());


export default app;