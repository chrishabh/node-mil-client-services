const mysql = require('mysql2/promise');
const config = require('../config');

async function query(sql, params) {
    const connection = await mysql.createConnection(config.sqlsrv); 
    // If there is an error connecting to the database
    connection.connect(function (err) {
        if (err) {
            throw err;
        }
        else {
            console.log('DB connection establish');
        }
    });
    const [results] = await connection.execute(sql, params);

    return results;
}

module.exports = {
    query
}