import axios from "axios";
import chalk from "chalk";

export default class BinanceAPI {
    apiKey: String | undefined = '';
    apiSecret: String | undefined = '';
    instance = axios.create({
        baseURL: 'https://api.binance.com',
        timeout: 1000,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
    });

    constructor(apiKey: String | undefined, apiSecret: String | undefined) {
        this.apiKey = apiKey;
        this.apiSecret = apiSecret;
        this.instance.get('/api/v3/ping').then(resp => {
            if (resp) {
                console.log(chalk.blue('API Binance UP'))
            } else {
                console.log(chalk.red('API Binance UP'));
            }
        })
    }

    exchangeInfo() {
        return new Promise((resolve, reject) => {
            this.instance.get('/api/v3/exchangeInfo').then(resp => {
                if (!resp) reject('erreur exchangeInfo');
                resolve(resp);
            });
        })
    }
};