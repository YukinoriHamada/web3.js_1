const Web3 = require("web3");
const url = "http://localhost:8545";
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(url));

web3.eth.getBlockNumber()
    .then((result) => {
        console.log("BlockNumber: " + result);
        return web3.eth.getAccounts();
    }).then((response) => {
        var targetAddr = response[0];
        console.log("target Address:" + targetAddr);
        return web3.eth.getBalance(targetAddr);
    }).then((responce) => {
        let eth = web3.utils.fromWei(responce);
        console.log("Balance(Ether): " + eth);
    });