import mongoose from 'mongoose'
import chalk from 'chalk';

const url: string = 'mongodb://localhost:27017/monkey-project';
const Schema = mongoose.Schema;
const monkeys = new Schema({}, { strict: false })
const TestCollection = mongoose.model('monkeys', monkeys)
const paramsConnections = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
};

export default class Mongo {
    constructor() { this.connect(); }

    async connect() {
        let connexion = await mongoose.connect(url, paramsConnections);
        if (connexion.connections.length === 0) { console.log(chalk.red('BDD Connection failed')); return }
        console.log(chalk.blue('BDD Connection succesfully'));
    }

    async insert(data: any) {
        let body = data
        const testCollectionData = new TestCollection(body)
        await testCollectionData.save();
    }

    // async update(filter: any, data: any) {
    //     await monkeysModel.updateMany(filter, data);
    // }

    // async delete(filter: any, data: any) {
    //     await monkeysModel.deleteMany(filter, data);
    // }

    // async find(filter: any) {
    //     return await monkeysModel.find(filter);
    // }
};