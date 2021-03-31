import express from 'express';
import { index } from './app/index';
import Services from './app/services';
import * as dotenv from 'dotenv';
import chalk from 'chalk';
import { TwingLoaderFilesystem, TwingEnvironment } from 'twing';
import path from 'path';
import cookieParser from 'cookie-parser';

const app = express();
const PORT = 3000;
const services = new Services();
const loader = new TwingLoaderFilesystem("./app/templates");
const twing = new TwingEnvironment(loader);

//CONFIG
dotenv.config({ path: 'key.env' });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
index.init(services.BinanceAPI, services.Mongo);
index.routes(app, twing);

//Start server 
app.listen(PORT, () => { console.log(chalk.blue('Client web: http://localhost:' + PORT)); });