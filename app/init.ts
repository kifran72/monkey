import { MonkeyMoney } from "./interfaces/MonkeyMoney";

export const init = async (Binance: any, Mongo: any) => {

    let ExchangeInfo : any = await Binance.exchangeInfo();
    let test = await Binance.testOrder();
    let tradingRules = {
        r1m: null,
        r1s: null,
        r1d: null
    };

    for(let rateLimit of ExchangeInfo.rateLimits ) {
        switch(rateLimit.interval) {
            case 'MINUTE':
                tradingRules.r1m = rateLimit.limit;
                break;
            case 'SECOND':
                tradingRules.r1s = rateLimit.limit;
                break;
            case 'DAY':
                tradingRules.r1d = rateLimit.limit;
                break;
        }
    }
    // Mongo.insert(ExchangeInfo.rateLimits);   
    // console.log(ExchangeInfo);
};