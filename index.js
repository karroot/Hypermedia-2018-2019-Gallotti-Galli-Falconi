/* const {Client} = require('pg')
const client = new Client({
    user: "postgres",
    password:"admin",
    host:"localhost",
    port: 5432,
    database:"postgres"
})

client.connect()
.then(() => console.log("connected successfuly"))
.then(() =>client.query("select * from events"))
.then (result => console.table(result.rows))
.catch(e => console.log(e))
.finally(() => client.end())

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var server = app.listen(8080, function () { // create a server
    console.log("app running on port.", server.address().port);
});

app.get("/", function(req, res) { // listens for requests to localhost:8080
    res.send(result.rows); // put your data here
});

*/

const pg        = require('pg');
const express   = require('express');
const app       = express();

const config = {
    user: 'postgres',
    database: 'postgres',
    password: 'admin',
    port: 5432
};

// pool takes the object above -config- as parameter
const pool = new pg.Pool(config);

app.get('/', (req, res, next) => {
   pool.connect(function (err, client, done) {
       if (err) {
           console.log("Can not connect to the DB" + err);
       }
       client.query('SELECT * FROM events', function (err, result) {
            done();
            if (err) {
                console.log(err);
                res.status(400).send(err);
            }
            res.status(200).send(result.rows);
       })
   })
});

app.listen(4000, function () {
    console.log('Server is running.. on Port 4000');
});