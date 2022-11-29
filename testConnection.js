"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
// pools will use environment variables
// for connection information
var poolConfig = {
    user: "postgres",
    database: "dvdrental",
    password: "detail-peafowl-COWPOKE",
    host: "localhost",
    port: 5432
};
var pool = new pg_1.Pool(poolConfig);
pool.on('connect', function (client) {
    console.log("Successfully connected to the db");
});
pool.query('select * FROM film limit 5;', function (err, res) {
    console.log(err, res);
    pool.end();
});
