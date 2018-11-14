const { Pool, Client } = require('pg');
const connectionString = global.properties.db;

const pool = new Pool({
    connectionString: connectionString,
})


exports.insertAddress = function(address,listen,abi) {
    pool.query('INSERT INTO listen_address(address,listen,abi) VALUES($1,$2,$3)',[address,listen,abi], (err, res) => {
        console.log("> error insert "+err);
        console.log("> insert address to listen "+address);
    })
}

exports.getAllAddress = function(callback) {
    console.log("> get all address");
    pool.query('select * from listen_address',(err, res) => {
        if (res != undefined) {
            console.log("> error load "+err);
            console.log("> load rows "+res.rows.length);
            global.allAddress = res.rows;
        }
        callback(null, 'getAllAddress');
    });
}

exports.shutdown = function() {
    pool.end();
}
