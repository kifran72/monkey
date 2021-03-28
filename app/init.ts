// import { MonkeyMoneyStats } from "./interfaces/MonkeyMoneyStats";
import chalk from "chalk";
import { MonkeyMoney } from "./interfaces/MonkeyMoney";
const dbName = 'monkey-project';
const init = async (client: any, clientMongo: any) => {

    let getMonkeyStats = async () => {
        let monkeyList = [
            ''
        ]
        let monkeyMoney = [];
        if (monkeyList.length != 0) {
            for (let monkey of monkeyList) {
                let monkeyStat = await client.dailyStats({ symbol: monkey });
                monkeyMoney.push({
                    name: monkey,
                    stats: monkeyStat
                });
                if (monkeyMoney.length === (monkeyList.length / 2)) {
                    console.log(chalk.yellow('(50%)'));
                }
            }
            return monkeyMoney;
        }
    }

    let insertMonkeyStats = (data: any) => {
        clientMongo.connect(function(err: any) {
            const db = clientMongo.db(dbName);
            const collection = db.collection('monkeys');
            collection.insertMany(data, (err: any, result: any) => { if (err) throw err; })
            clientMongo.close();
        });
    }
    let test = await getMonkeyStats();
    insertMonkeyStats(test);
};


module.exports = init;