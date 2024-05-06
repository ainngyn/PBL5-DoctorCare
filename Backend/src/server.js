import express from 'express';
import bodyParser from 'body-parser';
import viewEngine from './config/viewEngine';
import initWebRouter from './route/web';
import connecDB from './config/connectDB';
import flash from 'connect-flash';
import session from './config/session';
import cors from 'cors';

// import dotenv from '.env';
require('dotenv').config();
let app = express();
app.use(cors({ origin: true }));
// config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: true }));
//config session
session.configSession(app);
// Sử dụng express-flash middleware
app.use(flash());

viewEngine(app);
initWebRouter(app);

connecDB();

let port = process.env.PORT || 6969;
//port == undefined => port = 6969
app.listen(port, () => {
    console.log('Backend NodeJS is running on the port: ' + port);
});
