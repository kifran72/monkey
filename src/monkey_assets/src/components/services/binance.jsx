import { Component } from 'react';
import axios from 'axios';

class BinanceService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instance: axios.create({
                headers: {
                    post: {
                        'X-MBX-APIKEY': '62BW7VG0r1BTqgHkaDONTzFt4fBSL7Pkzrs5mKMtAmVUJx0KP8UN0xbbDHrSXMol'
                    }
                }
            }),
            url: `${process.env.MODE}` === 'DEV' ? '/binance' : 'https://api.binance.com',
        }
    }

    showData = async () => {

        let ticker = await this.state.instance.get(this.state.url + '/api/v3/ticker/price');
        let ticker2 = await this.state.instance.get(this.state.url + '/api/v3/ticker/24hr');
        console.log(ticker);
        console.log(ticker2);
        return ticker;
    }
}

export default BinanceService;
