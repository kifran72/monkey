import detectEthereumProvider from "@metamask/detect-provider";

const ethereum = window.ethereum;

if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    ethereum.on("accountsChanged", function (test) {
        console.log(test[0]);
    });
}

let startApp = (provider) => {
    // If the provider returned by detectEthereumProvider is not the same as
    // window.ethereum, something is overwriting it, perhaps another wallet.
    if (provider !== window.ethereum) {
        console.error("Change Network / Wallet");
    }
    // Access the decentralized web!
};

let testConnect = async () => {
    const provider = await detectEthereumProvider();
    if (provider) {
        startApp(provider); // Initialize your app
    } else {
        console.log("Install MetaMask first!");
    }
};

//gestion des récups de données user (Balance / Value )
const Metamask = () => {
    ethereum.request({ method: "eth_requestAccounts" });
};

testConnect();

export default Metamask;
