var express = require('express');
var app        = express();
app.use(express.json());
var router = express.Router();
var dbAddress = require('./ddbb/listen_address');
var listen = require('./listen/startListen');

 exports.openServer = function (callback) {
    console.log("> Init Express");
    setRoute();
    app.listen(global.properties.port);
    callback(null, 'server');
    console.log('> Init Server port ' + global.properties.port);
}


function setRoute() {

    router.post('/add/:listen/:address', function(req, res) {
        dbAddress.insertAddress(req.params.address,req.params.listen,req.body.abi);
        listen.addListen(req.params.listen,req.params.address,req.body.abi);
        res.send(req.params.listen+" - "+req.params.address);
    });

    app.use('/listen/v1', router);
}


