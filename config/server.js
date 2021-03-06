var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var app = express();
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.urlencoded({ extended: true }));

//Rotas
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
module.exports = app;

