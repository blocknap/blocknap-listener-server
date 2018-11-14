var ethers = require('ethers');
var providers = require('ethers').providers;
var utils = require('ethers').utils;


function getProvider() {
    console.log("> get provider");
    var pro = global.properties;
    if (pro.provider=="infura_ropsten") {
        return  new providers.InfuraProvider(providers.networks.ropsten,pro.provider_config)
     } else if ("json_rpc") {
        return new providers.JsonRpcProvider(pro.provider_config, pro.network);
    }
}


exports.setWallet = function (callback) {
    console.log("> get wallet")
    var pro = global.properties;
    var provider = getProvider();
    wallet = new ethers.Wallet(pro.private, provider);
    wallet.provider = provider;
    global.wallet = wallet;
    callback(null, 'setWallet');
}