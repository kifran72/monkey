import React, { Component } from 'react';
import axios from 'axios';

class BinanceService extends Component {
    constructor(props) {
        super(props);
        this.state = {
            instance: axios.create({
                headers: {
                    post: {        // can be common or any other method
                        'X-MBX-APIKEY': '62BW7VG0r1BTqgHkaDONTzFt4fBSL7Pkzrs5mKMtAmVUJx0KP8UN0xbbDHrSXMol'
                    }
                }
            })
        }
    }

    showData = async () => {
        let ticker = await this.state.instance.get('/binance/api/v3/ticker/price');
        let ticker2 = await this.state.instance.get('/binance/api/v3/ticker/24hr');
        console.log(ticker)
        console.log(ticker2)
        return ticker;
    }
}

export default BinanceService;
