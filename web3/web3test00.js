const Web3 = require("web3");
const url = "http://localhost:8545";
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(url));

// web3 execute
web3.eth.getBlockNumber().then(console.log);

web3.eth.getBlockNumber()
    .then(console.log);

function callbackFunc(response){
    console.log(response);
}
web3.eth.getBlockNumber()
    .then(callbackFunc);

web3.eth.getBlockNumber()
    .then(function(response){
        console.log(response);
    });

web3.eth.getBlockNumber()
    .then((response) => {
        console.log(response);
    });