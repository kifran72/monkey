import BinanceAPI from './binance';
import Mongo from './mongo';

export default class Services {
    BinanceAPI = new BinanceAPI(process.env.KEY, process.env.SECRET);
    Mongo = new Mongo();
    constructor() { }
};