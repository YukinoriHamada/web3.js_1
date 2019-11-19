const Web3 = require("web3");
const url = "http://localhost:8545";
var web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(url));

console.log("(A)start");

web3.eth.isMining()
    .then((res) => {
        
        console.log("--------callback--------");
        console.log("(B)isMining:" + res);
        console.log("--------callback--------");
        console.log("(C) end");
    });

