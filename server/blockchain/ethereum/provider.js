const Web3 = require('web3');

exports.get = function () {
    var web3 = new Web3(new Web3.providers.HttpProvider(global.provider_config));
    return web3;
}