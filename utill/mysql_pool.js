const mysql = require('mysql');
const config = require('../config/db_config.js');

let pool = mysql.createPool(config);

function getConnection(callback) {
    pool.getConnection(function(err, conn) {
        if ( !err ) {
            callback(conn);
        }
    });
}

module.exports = getConnection;