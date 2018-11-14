const db = require('server/ddbb/listen_address');


exports.listen = function() {
    process.on('SIGTERM', function () {
        db.shutdown();
    });
}