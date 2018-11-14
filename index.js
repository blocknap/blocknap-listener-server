var program = require('commander');
var async = require("async");
var wallet = require('./server/blockchain/ethereum/getWallet.js');
const fs = require('fs');
const listen = require('./server/listen/startListen');


program
    .version('0.1.0')
    .option('-f, --file <value>', 'set file', './blocknap_listen_server.json');

// must be before .parse() since
// node's emit() is immediate
program.on('--help', function () {
    console.log('')
    console.log('Examples:');
    console.log('');
    console.log('  - f blocknap_listen_server.json');
});

program.parse(process.argv);

function load() {

    console.log("---------------------------------");
    console.log(" BlockNap Listener Server v0.1.0");
    console.log("---------------------------------");

    const propertiesRaw = fs.readFileSync(program.file);
    global.properties = JSON.parse(propertiesRaw);
    initApp();

}


function initApp() {
    var express = require('./server/express.js');
    var db = require('./server/ddbb/listen_address');
    async.series([
            function (callback) {
                db.getAllAddress(callback);
            },
            function (callback) {
                wallet.setWallet(callback);
            },
            function (callback) {
                listen.create(callback);
            },
            function (callback) {
                express.openServer(callback);
            },
            function (callback) {
                const web3 = require('./server/blockchain/ethereum/getListen');
                web3.initWeb3(callback);
            }
        ],
        function (err, results) {
            console.log("> series "+JSON.stringify(results));
        });
}

load();