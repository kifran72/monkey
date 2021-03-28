import express from 'express';
import * as dotenv from "dotenv";
import chalk from "chalk";
import Binance from 'binance-api-node'
import { MongoClient } from "mongodb";

dotenv.config({ path: 'key.env' });
const app = express();
const PORT = 3000;
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'monkey-project';
const clientMongo = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const client = Binance({
    apiKey: process.env.KEY,
    apiSecret: process.env.SECRET
})

// Mongo 
clientMongo.connect(function(err) {
    console.log('BDD Connected successfully');
    const db = clientMongo.db(dbName);
});

// API
require('./app/index').init(client, clientMongo);
require('./app/index').routes(app, client, dbName);

app.listen(PORT, () => {
    client.ping().then(
        ping => {
            if (ping) {
                console.log(chalk.blue('API: api.binance UP'));
                console.log(chalk.blue('Port: ' + PORT));
            }
        }).catch(err => {
            console.log(chalk.red('API: api.binance DOWN', err));
        })
})