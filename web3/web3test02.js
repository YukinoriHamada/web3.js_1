const Web3 = require("web3");
const url = "http://localhost:8545";
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(url));

var num = 0;

web3.eth.getAccounts()
    .then((response) => {
        var targetAddr = response[num];
        console.log("get All Accounts:");
        console.log("----------------");
        console.log(response);
        console.log("----------------");
        console.log("target Account:" + targetAddr);
        console.log("target num = " + num);
    });