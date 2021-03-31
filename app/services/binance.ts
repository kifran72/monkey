import axios from "axios";
import Binance from 'binance-api-node'
import chalk from "chalk";
import * as dotenv from 'dotenv';
dotenv.config({ path: 'key.env' });

const client = Binance({
  apiKey:  process.env.KEY,
  apiSecret:  process.env.SECRET
})

const orderFilters: any = {
    type: 'LIMIT',
    symbol: 'XLMETH',
    side: 'BUY',
    quantity: '100',
    price: '0.0002',
};

export default class BinanceAPI {

    
    constructor(apiKey: String | undefined, apiSecret: String | undefined) { this.ping(); }

    async ping() {
        try {
            let test = await client.ping();
            if (test) {
                console.log(chalk.blue('API Binance UP'))
            } else {
                console.log(chalk.red('API Binance DOWN'));
            }
        } catch (e) {
            console.error(e);
        }
    }
    
    async exchangeInfo() {
        try {
            return await client.exchangeInfo();
        } catch (e) {
            console.error(e);
        }
    }

    async testOrder() {
        try {
            return await client.orderTest(orderFilters)
        } catch (e) {
            console.error(e);
        }
    }
    
};