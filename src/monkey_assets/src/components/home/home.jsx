import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as monkey_idl, canisterId as monkey_id } from 'dfx-generated/monkey';
import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ethers } from 'ethers';

// Components
import Navbar from '../navbar/navbar';
import NavbarNotConnected from '../navbar/navbarNotConnected';
import Dashboard from '../dashboard/dashboard';
import Login from '../login/login';
import ContentLogged from '../contentLogged/contentLogged';
import ContentNotLogged from '../contentNotLogged/contentNotLogged';




export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      agent: new HttpAgent(),
      user: null,
    }
    this.etherJSConnect()
  }

  contracts = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const daiAddress = "dai.tokens.ethers.eth";
    const daiAbi = [
      // Some details about the token
      "function name() view returns (string)",
      "function symbol() view returns (string)",

      // Get the account balance
      "function balanceOf(address) view returns (uint)",

      // Send some of your tokens to someone else
      "function transfer(address to, uint amount)",

      // An event triggered whenever anyone transfers to someone else
      "event Transfer(address indexed from, address indexed to, uint amount)"
    ];
    const daiContract = new ethers.Contract(daiAddress, daiAbi, provider);
    return daiContract;
  }

  etherJSConnect = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contracts = await this.contracts();
    const blockNumber = await provider.getBlockNumber();
    const balance = await provider.getBalance("ethers.eth")
    const balancecontracts = await contracts.balanceOf("ricmoo.firefly.eth")
    const daiWithSigner = contracts.connect(signer);
    const dai = ethers.utils.parseUnits("1.0", 18);
    // const tx = await daiWithSigner.transfer("ricmoo.firefly.eth", dai);
    // console.log('contracts: ', tx)

    console.log('contracts: ', contracts)
    console.log('name: ', await contracts.name())
    console.log('symbol: ', await contracts.symbol())
    console.log('balancecontracts: ', balancecontracts)
    console.log('formatUnits: ', ethers.utils.formatUnits(balance, 18))

    console.log('balance non formaté: ', balance)
    console.log('balance formaté: ', ethers.utils.formatEther(balance))
    console.log('Signer: ', signer)
    console.log('BlockNumber: ', blockNumber)
    return;
  }

  getMonkey = async () => {
    const greeting = Actor.createActor(monkey_idl, { agent: this.state.agent, canisterId: monkey_id })
    return await greeting.greet('test');
  }

  render() {
    return (
      <div>
        <Router>


          {this.state.user !== null
            ? <Navbar />
            : <NavbarNotConnected />
          }
          {/* {this.state.user === null 
            ? <ContentNotLogged /> 
            :  <ContentLogged />
          } */}

          {/* SETUP ROUTES */}
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

document.title = "Home";