const Web3 = require('web3');
const provider = require('../ethereum/provider');
const db =  require('../../ddbb/listen_address');
var web3 = null;

exports.initWeb3 = function(callback)  {
    console.log("> init web3");
    web3 = provider.get();
    const account = web3.eth.accounts.privateKeyToAccount(global.properties.private);
    web3.eth.accounts.wallet.add(account);
    web3.eth.defaultAccount = account.address;
    web3.eth.defaultAccount = web3.eth.accounts[0];
    global.web3 = web3;
    callback(null, 'initWeb3');
}


