const Web3 = require("web3");
const url = "http://localhost:8545";
let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(url));

async function func() {
    console.log("async start");

    let mine = await web3.eth.isMining();
    console.log("isMining:" + mine);

    let blocknum = await web3.eth.getBlockNumber();
    console.log("getBlockNumber: " + blocknum);

    let accounts = await web3.eth.getAccounts();
    console.log("getAccounts: " + accounts);
    console.log("getAccounts[0]:" + accounts[0]);

    let balanceWei = await web3.eth.getBalance(accounts[0]);
    let balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    console.log("getBalance(wei):" + balanceWei);
    console.log("getBalance(web):" + balanceEth);

    console.log("async end");
}

func();
console.log("END")