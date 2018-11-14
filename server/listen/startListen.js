exports.create =  function(callback) {
    loadListen(callback);
}

function startListen(listen) {
    if (global.allAddress != undefined && (global.allAddress.length != null && global.allAddress.length > 0)) {
        for(i=0;i<global.allAddress.length;i++) {
            var aAddress = global.allAddress[i]
            if(aAddress.listen==listen.name) {
                startListenFile(aAddress.address,aAddress.abi,listen);
            }
        }
    }
}


function loadListen(callback) {
    var listener = global.properties.listenFiles;
    for (i=0;i< listener.length;i++)  {
        var listen = listener[i];
        console.log("> load listener "+listen.name+" "+listen.file)
        startListen(listen);
    }
    callback(null, 'listen');
}


function getListen(name) {
    let  listenR = null;
    let listener = global.properties.listenFiles;
    for (i=0;i< listener.length;i++)  {
        var listen = listener[i];
        if (name=== listen.name) {
            listenR = listen;
        }
    }
    return listenR;
}

function startListenFile(address,abi,listen) {
    var listenF = require(global.properties.path_listen+"/"+listen.file);
    listenF.init(address,abi);
}


exports.addListen = function(name,address,abi) {
        let listen = getListen(name);
        if (listen != null) {
            startListenFile(address,abi,listen);
        } else {
            console.log("> not find listen "+name);
        }
}
