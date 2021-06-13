import * as React from 'react';
import Navbar from '../navbar/navbar';
import ContentNotLogged from '../contentNotLogged/contentNotLogged';
import '../../../assets/main.css'; // Import custom styles
import {ethers} from "ethers";

export default class Home extends React.Component {
  constructor (props) {
        super(props);
        this.state = {
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
      const contracts =  await this.contracts();
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
      console.log('BlockNumber: ',blockNumber)
      return;
    }
  

  render() {
    return (
        <div>
            <Navbar />
            <ContentNotLogged />
        </div>
    );
  }
}

document.title = "Home";