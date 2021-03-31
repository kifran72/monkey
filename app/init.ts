import { Map } from 'typescript';
import { MonkeyMoney } from './interfaces/MonkeyMoney';
import chalk from 'chalk'

export const init = async (Binance: any, Mongo: any) => {
    let exchangeInfo: any = await Binance.exchangeInfo();
    let dailyInfo = await Binance.dailyStats();
    // legal range is '5, 10, 20, 50, 100, 500, 1000, 5000'.
    let bookInfo = await Binance.bookInfo('ETHUSDT', 5000);
    let testInfo = await Binance.testOrder();
    let tradeLimits = getTradeLimits(exchangeInfo.rateLimits);
    let dailyStats = getDailyStats(dailyInfo);

    console.log('Init ok');
};

let getTradeLimits = (ExchangeInfo: any) => {
    let tradeLimits = { r1m: null, r1s: null, r1d: null };
    for (let tradeLimit of ExchangeInfo) {
        switch (tradeLimit.interval) {
            case 'MINUTE':
                tradeLimits.r1m = tradeLimit.limit;
                break;
            case 'SECOND':
                tradeLimits.r1s = tradeLimit.limit;
                break;
            case 'DAY':
                tradeLimits.r1d = tradeLimit.limit;
                break;
        }
    }
    return tradeLimits;
}

let getDailyStats = (dailyInfo: any) => {
    //  trouver l'écart max entre pourcentage max et min, sortir le nom de la monnaie 
    // regarder priceChangePercent: sur ETHUSDT set des ordres à -10 , -20 %
    let test = 0.00; let testInfo;
    for (let info of dailyInfo) {
        if (parseFloat(info.priceChangePercent) > test) {
            test = parseFloat(info.priceChangePercent)
            testInfo = info;
        }
    }
    return testInfo;
}
