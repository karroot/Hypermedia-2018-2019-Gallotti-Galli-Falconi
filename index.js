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
pp.use(express.static('public'));
app.use(bodyParser.json());

app.get('/food', function(req, res) {
    pg.defaults.ssl = true;
    pg.connect(process.env.DATABASE_URL, function(err, client) {
        if (err) throw err;
        console.log('Connected to postgres! Getting schemas...');
        client.query('SELECT * FROM events;').on('row', function(row) {
        console.log(JSON.stringify(row));
        });
    });
});

http.listen(process.env.PORT || 3000, function(){
    console.log('listening to port 3000!');
});

/*

const pg        = require('pg');
const express   = require('express');
const app       = express();

const config = {
    host: 'ec2-54-243-197-120.compute-1.amazonaws.com',
    user: 'nsgcqefizlkqets',
    database: 'd61p52kthlqep8',
    password: '2a74a9cca95e794f9baaa32eb449872ab85e8ad6d083ff1aa746a4f10d322d50',
    port: 5432
};
heroku config:set DATABASE_URL=postgres://nsgcqefizlkqets:2a74a9cca95e794f9baaa32eb449872ab85e8ad6d083ff1aa746a4f10d322d50@ec2-54-243-197-120.compute-1.amazonaws.com:5432/d61p52kthlqep8

*/